

class Person{

    constructor(ID=1,name="emptyName",imgSrc=`https://images.pexels.com/photos/5454858/pexels-photo-5454858.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`){
        this.ID=ID
        this.name=name
        this.imgSrc=imgSrc
    }
    getInfosForPersonsList(){
        let{name,imgSrc}=this
        return {userID:this.ID,name,imgSrc}
    }
    getInfos(){
        this.getPostsNumber();
        this.getDescription();
        this.getFollowersNNumber();
    }

    getPosts(){


    }
    getDescription(){

    }
    getPostsNumber(){


    }
    getFollowers(){

    }
    getFollowings(){

    }
    getFollowersNNumber(){

    }

    getFollowingsNumber(){

    }


}

export default Person