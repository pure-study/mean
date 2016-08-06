/*****
*
* $Id: figures.js 440 2010-06-24 19:00:03Z klaus $
* commmon javascript library for canvas figures
*
*****/

window.figures = {
    useShadow : function(context,activate,offX,offY,blur,color) {
        if (activate) {
            context.shadowOffsetX = typeof offX != 'undefined' ? offX : 2;
            context.shadowOffsetY = typeof offY != 'undefined' ? offY : 2;
            context.shadowBlur = typeof blur != 'undefined' ? blur : 2.0;
            context.shadowColor = typeof color != 'undefined' ? color : '#CCC';
        }
        else {
            context.shadowOffsetX = 0;
            context.shadowOffsetY = 0;
            context.shadowBlur = 0;
            context.shadowColor = 'rgba(0,0,0,0)';
        }
    },
    drawArrow : function(context,tx,ty,deg,l,b,col,hollow) {
      // preset optional arguments
      deg = typeof deg != 'undefined' ? deg : 0;
      l = typeof l != 'undefined' ? l : 25;
      b = typeof b != 'undefined' ? b : 20;
      col = typeof col != 'undefined' ? col : '#000';
      hollow = typeof hollow != 'undefined' ? hollow : false;

      // draw arrow
      context.save();
      context.translate(tx,ty);
      context.rotate(deg * (Math.PI/180.0));
      context.strokeStyle = col;      
      if (hollow) {
        context.fillStyle = '#FFF';      
      }
      else {
        context.fillStyle = col;
      }
      context.beginPath();
      context.moveTo(l*-1,(b/2.0)*-1);
      context.lineTo(0,0);
      context.lineTo(l*-1,(b/2.0));
      context.closePath();
      context.fill();
      context.stroke();
      context.restore();
    },
    addIcon : function(context,num,icon) {
      var i, image;
      // add icons to bottom right indicating click-me, needs-server, etc
      image = new Image();
      image.src = './icons/'+icon;
      image.onload = function() {
        context.save();
        context.setTransform(
          1,0,0,1,
          context.canvas.width - image.width - (10+(image.width*num)),
          context.canvas.height - image.height - 10
        );
        context.drawImage(image,0,0);
        context.restore();
      };
    },
    REVISION : '$Revision$'
};
