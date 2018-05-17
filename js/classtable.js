$(function(){
    var extop=0,exleft=0;
    $('.left .item').draggable({
        helper:'clone',
        zIndex:101,
    });

    $('.right .drop').droppable({
        over:function(event,ui){
            $(this).addClass('over');
        },
        out:function(event,ui){
            $(this).removeClass('over');
        },
        drop:function(event, ui){
            $(this).removeClass('over');
            if(ui.draggable.hasClass('assigned')){
                $(this).append(ui.draggable);
            }else{
                var c=ui.draggable.clone().addClass('assigned');
                $(this).append(c);
                c.draggable({
                    revert:true,
                    revertDuration:0,
                    start:function(e,u){
                        extop=u.position.top;
                        exleft=u.position.left;
                    },
                    stop:function(e,u){
                        var top=u.position.top;
                        var left=u.position.left;
                        var len=Math.pow((top-extop),2)+Math.pow((left-exleft),2);
                        if(Math.sqrt(len)>200){
                            $(this).remove();
                        }
                    }
                });
            }
        }
    });
});