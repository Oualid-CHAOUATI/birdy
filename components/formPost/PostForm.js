import React, { useCallback, useRef, useState } from "react";
import HashtagBtn from "../HashtagBtn/HashtagBtn";
import ImgWrapper from "../ImgWrapper/ImgWrapper";
import "./PostForm.css";

const MAIN_CLASS = "post-form";

const name = "waleed";
const MAX_HASHTAGS=4
const JOIN_HASHTAGS=" | "

function PostForm({ imgSrc ,name,userID}) {
  const [canShowModal,setCanShowModal]=useState(false)
  // const [canShowModal, setCanShowModal] = useState(true);
  const [hashtags, setHashtags] = useState([]);
  const [error, setError] = useState(false);
  const inputHashtag = useRef(null);

  const ERROR_MESSAGE="vous avez dépassé le nombre maximal de hashtags"
  const addHashtag = useCallback((event) => {
    event.preventDefault();
    let value = inputHashtag.current.value.trim();

    if(hashtags.length>=MAX_HASHTAGS)
    {
      setError(true)
      return;

    }
    inputHashtag.current.value=""
    inputHashtag.current.focus()

    if (value == "") return;
    if (hashtags.includes(value)) return;
    value=value.replace(/\s+/g, '_')
    hashtags.push(value);
    setHashtags([...hashtags]);

    
  }, [hashtags]);

  const removeHashtag = useCallback(
    (hashtagToRemove) => {
      if (!hashtags.includes(hashtagToRemove)) return;
      var index = hashtags.indexOf(hashtagToRemove);
      if (index == -1)return; 
        hashtags.splice(index, 1);
      setError(false)

      setHashtags([...hashtags]);
    },
    [hashtags]
  );

  const toggleShowFormModal = useCallback(() => {
    setCanShowModal(!canShowModal);
  }, [canShowModal]);

const joinHashtags=()=>{
let content=""
  for(let i=0;i<hashtags.length;i++){
    if(i!=0)content+="<span></span>"
    content+=hashtags[i]
  }
  return content
}

  let hashtagsBtnUI=hashtags.map(hashtag=><HashtagBtn onClick={removeHashtag} label={hashtag}/>)
  let joinedHashtags=joinHashtags()

  return (
    <>
      {/* {canShowModal && <div>modal</div>} */}
      <div className={MAIN_CLASS}>
        <div
          className={`${
            (!canShowModal && "hide") || ""
          } post-form-modal flex-center`}
        >

          <div className="content">
            <button className="close-btn btn" onClick={toggleShowFormModal}>
              CLOSE
            </button>

            <div className="main-content flex f-column f-gap-1">
              <div className="top flex-center f-gap-1 f-wrap">
                <ImgWrapper
                  imgSrc={imgSrc}
                />

                <label className="hashtag-form-wrapper">
                  <p>add hashtag ({MAX_HASHTAGS} max)</p>
                  <form className="hashtag-form flex " onSubmit={addHashtag}>

                    <div className={error&&' error-state '+`input-wrapper flex`  }>

                      {/* le flex c pour juste le align stretch */}

                      <input type="text" ref={inputHashtag} ></input>
                    </div>

                    <button className="add-btn  btn">
                      <span>+</span>
                    </button>
                  </form>
                </label>
                {error&&               <div className="error-message">
                  {ERROR_MESSAGE}
                </div>}

              </div>

              <div className="main-form-wrapper">
                <div className="hastags-btns-wrapper flex f-gap-1 f-wrap">
               {hashtagsBtnUI}
                </div>

                <div className="main-form-content">
                  <div className="hastags-txt-wrapper" dangerouslySetInnerHTML={{__html:joinedHashtags}}/>
                    
                    

                  <form className="flex f-column f-gap-0p5">
                    <textarea placeholder="ecrire..." rows="5"></textarea>
                    <input id="z"type="file" role="input" className="btn"
                    accept="image/*,image/heif,image/heic"
                    
                    />
                    <button type="submit" className="btn">
                      Poster
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`btn-wrapper flex-center f-column  f-gap-1`}>
          <p className={`question`}>Quoi de neuf {name} </p>
          <button className="btn" onClick={toggleShowFormModal}>
            <span>ajouter un nouveau post</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default PostForm;
