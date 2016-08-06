/*****
*
* $Id: pathsMethods.js 962 2010-10-03 16:31:55Z klaus $
*
* quick hack to allow reuse of figures
*
*****/

var colors = {
    label:'#000',
    labelOrigin:'#CCC',
    path:'#333',
    pathLegend:'#CCC',
    point:'#000'
};
var font = {
    big : 'normal 12px sans-serif',
    normal : 'normal 8px sans-serif',
    bold : 'bold 8px sans-serif',
    italic : 'italic 7px sans-serif',
    small : 'normal 7px sans-serif'
};

var _point = function(x,y,radius) {
    context.moveTo(x,y);
    context.arc(x,y,radius,0,Math.PI*2.0,0);
};
var _text = function(str,x,y,align,base) {
    context.textAlign = align ? align : 'start';
    context.textBaseline = base ? base : 'alphabetic';
    context.fillText(str,x,y);
};

var skeleton = function(x,y,w,h,meth,args) {
    // rectangle with shadow and gray border
    window.figures.useShadow(context,true);
    context.fillStyle = '#FFF';
    context.fillRect(x,y,w,h);
    window.figures.useShadow(context,false);
    context.restore();
    context.strokeStyle = '#999';
    context.strokeRect(x,y,w,h);

    // labels
    if (meth && args) {
      window.figures.useShadow(context,true);
      context.fillStyle = '#000';
      context.font = font.big;
      _text(meth,x+(w/2.0),(y+h+20),'center','bottom')
      context.font = font.small;
      _text(args,x+(w/2.0),(y+h+32.5),'center','bottom')
      window.figures.useShadow(context,false);
    }
};

var lineTo = function() {
    // legend
    context.save();
    context.fillStyle = colors.point;
    context.beginPath();
    _point(20,130,2);
    _point(130,20,2);
    context.fill();
    context.restore();

    context.save();
    context.font = font.bold;
    context.fillStyle = colors.labelOrigin;
    _text('x0/y0',20,145,'center');
    context.fillStyle = colors.label;
    window.figures.useShadow(context,true);
    _text('x/y',130,15,'center','bottom');
    context.restore();

    // geometry
    context.save();
    context.beginPath();
    context.moveTo(20,130);
    context.lineTo(130,20);
    context.strokeStyle = colors.path;
    context.stroke();
    context.restore();
};

var quadraticCurveTo = function() {
    // legend
    context.save();
    context.strokeStyle = colors.pathLegend;
    context.beginPath();
    context.moveTo(20,130);
    context.lineTo(20,20);
    context.lineTo(130,20);
    context.stroke();
    context.restore();

    context.save();
    context.fillStyle = colors.point;
    context.beginPath();
    _point(20,130,2);
    _point(130,20,2);
    _point(20,20,2);
    context.fill();
    context.restore();

    context.save();
    context.font = font.bold;
    context.fillStyle = colors.labelOrigin;
    _text('x0/y0',20,145,'center');
    context.fillStyle = colors.label;
    context.font = font.italic;
    window.figures.useShadow(context,true);
    _text('cpx/cpy',20,15,'center','bottom');
    context.font = font.bold;
    _text('x/y',130,15,'center','bottom');
    context.restore();

    // geometry
    context.save();
    context.beginPath();
    context.moveTo(20,130);
    context.quadraticCurveTo(20,20,130,20);
    context.strokeStyle = colors.path;
    context.stroke();
    context.restore();
};
var bezierCurveTo = function() {
    // legend 
    context.save();
    context.strokeStyle = colors.pathLegend;
    context.beginPath();
    context.moveTo(20,130);
    context.lineTo(100,130);
    context.moveTo(130,20);
    context.lineTo(40,20);
    context.stroke();
    context.restore();

    context.save();
    context.fillStyle = colors.point;
    context.beginPath();
    _point(20,130,2);
    _point(130,20,2);
    _point(100,130,2);
    _point(40,20,2);
    context.fill();
    context.restore();

    context.save();
    context.font = font.bold;
    context.fillStyle = colors.labelOrigin;
    _text('x0/y0',20,145,'center');
    context.font = font.italic;
    context.fillStyle = colors.label;
    window.figures.useShadow(context,true);
    _text('cp1x/cp1y',100,145,'center');
    _text('cp2x/cp2y',40,15,'center','bottom');
    context.font = font.bold;
    _text('x/y',130,15,'center','bottom');
    context.restore();

    // geometry
    context.save();
    context.beginPath();
    context.moveTo(20,130);
    context.bezierCurveTo(100,130,40,20,130,20);
    context.strokeStyle = colors.path;
    context.stroke();
    context.restore();
};
var arcTo = function() {
    // legend
    context.save();
    context.strokeStyle = colors.pathLegend;
    context.beginPath();
    context.moveTo(20,130);
    context.lineTo(20,20);
    context.lineTo(130,20);
    context.moveTo(100,60);
    context.arc(60,60,40,0,Math.PI*2.0,0);
    context.moveTo(20,60);
    context.lineTo(60,60);
    context.lineTo(60,20);

    context.stroke();
    context.restore();

    context.save();
    context.fillStyle = colors.point;
    context.beginPath();
    _point(20,130,2);
    _point(20,20,2);
    _point(130,20,2);
    _point(20,60,2);
    _point(60,20,2);
    context.fill();
    context.restore();

    context.save();
    context.font = font.bold;
    context.fillStyle = colors.labelOrigin;
    _text('x0/y0',20,145,'center');
    context.fillStyle = colors.label;
    context.font = font.italic;
    window.figures.useShadow(context,true);
    _text('x1/y1',20,15,'center','bottom');
    _text('x2/y2',130,15,'center','bottom');
    context.font = font.bold;
    _text('t2x/t2y',60,15,'center','bottom');
    context.font = font.small;
    _text('radius',40,62.5,'center','top');
    _text('t1',10,60,'center','middle');
    context.restore();

    // geometry
    context.save();
    context.beginPath();
    context.moveTo(20,130);
    context.arcTo(20,20,130,20,40);
    context.strokeStyle = colors.path;
    context.stroke();
    context.restore();
};
var arc = function() {
    // legend
    context.save();
    context.strokeStyle = colors.pathLegend;
    context.beginPath();
    context.moveTo(75,75);
    context.lineTo(130,75);
    context.moveTo(75,75);
    context.arc(75,75,55,(-70.0*(Math.PI/180.0)),(155.0*(Math.PI/180.0)),0);
    context.closePath();
    context.stroke();
    context.restore();
    context.save();
    context.beginPath();
    context.strokeStyle = colors.pathLegend;
    context.moveTo(75,75);
    context.arc(75,75,15,(-70.0*(Math.PI/180.0)),0,0);
    context.moveTo(75,75);
    context.arc(75,75,25,0,(155.0*(Math.PI/180.0)),0);
    context.moveTo(35,25);
    context.arc(35,45,20,(-90.0*(Math.PI/180.0)),(-180.0*(Math.PI/180.0)),1);
    context.moveTo(15,45);
    context.lineTo(12,40);
    context.moveTo(15,45);
    context.lineTo(18,40);
    context.moveTo(35,25);
    context.lineTo(32,22);
    context.moveTo(35,25);
    context.lineTo(32,28);
    context.stroke();
    context.restore();

    context.save();
    context.fillStyle = colors.point;
    context.beginPath();
    _point(75,75,2);
    context.translate(75,75);
    context.rotate(-25*(Math.PI/180.0));
    _point(-55,0,2);
    context.rotate(25*(Math.PI/180.0));
    context.rotate(-70*(Math.PI/180.0));
    _point(55,0,2);
    context.fill();
    context.restore();

    context.save();
    context.font = font.bold;
    context.fillStyle = colors.labelOrigin;
    _text('x0/y0',72.5,75,'right','bottom');
    context.font = font.italic;
    context.fillStyle = colors.label;
    window.figures.useShadow(context,true);
    _text('x/y',70,90,'left','bottom');
    context.font = font.small;
    _text('anticlockwise',10,17.5,'start','bottom');
    _text('0',40,25,'center','middle');
    _text('1',12.5,52.5,'start','middle');
    _text('spx/spy',87.5,20,'start','bottom');
    _text('startAngle',87.5,65,'start','middle');
    _text('endAngle',75,105,'center','top');
    _text('0°',135,75,'start','middle');
    context.translate(75,75);
    context.rotate(-70*(Math.PI/180.0));
    _text('radius',30,-1,'center','bottom');
    context.rotate(70*(Math.PI/180.0));
    context.rotate(-25*(Math.PI/180.0));
    context.font = font.bold;
    _text('epx/epy',-50,-2.5,'center','bottom');
    context.rotate(25*(Math.PI/180.0));
    context.restore();

    // geoemtry
    context.save();
    context.beginPath();
    context.moveTo(75,75);
    context.arc(75,75,55,(-70.0*(Math.PI/180.0)),(155.0*(Math.PI/180.0)),0);
    context.strokeStyle = colors.path;
    context.stroke();
    context.restore();
};
var rect = function() {
    // legend 
    context.save();
    context.fillStyle = colors.point;
    context.beginPath();
    _point(20,130,2);
    _point(30,30,2);
    context.fill();
    context.restore();

    context.save();
    context.font = font.bold;
    context.fillStyle = colors.labelOrigin;
    _text('x0/y0',20,145,'center');
    context.fillStyle = colors.label;
    context.font = font.bold;
    window.figures.useShadow(context,true);
    _text('x/y',30,25,'center','bottom');
    context.font = font.italic;
    _text('w',75,135,'center');
    _text('h',140,75,'center','middle');
    context.restore();

    // geometry
    context.save();
    context.beginPath();
    context.rect(30,30,100,90);
    context.strokeStyle = colors.path;
    context.stroke();
    context.restore();
};
