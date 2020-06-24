(() => {
    // your code here

    function callbackTest(error, articlesArr) {

        if (error != null) {
            console.log("marche pas articles")
        } else {
            articlesArr.forEach(article => {

                window.lib.getComments(article.id,(error, CommentsArr)=>(
                    console.log("marche pas commentaire")


                }else{
                article,comments = CommentsArr
            });
        });
);

        console.table(articlesArr);


    };

document.getElementById("run").addEventListener("click",()=>{
window.lib.getPost(callbackTest);

});