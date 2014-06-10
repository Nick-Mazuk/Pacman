var redGhostImages = [];
var blueGhostImages = [];
var orangeGhostImages = [];
var pinkGhostImages = [];
var PacImg = [];
var frame = 0;

function onLoad() {

        // pre-loading

        function preLoad() {
                
                //Red Ghost Images
                var g11 = new Image();
                g11.src='Pictures/g11.png';
                var g12 = new Image();
                g12.src='Pictures/g12.png';
                redGhostImages[0] = g11;
                redGhostImages[1] = g12;
                
                //Blue Ghost Images
                var g21 = new Image();
                g21.src='Pictures/g21.png';
                var g22 = new Image();
                g22.src='Pictures/g22.png';
                blueGhostImages[0] = g21;
                blueGhostImages[1] = g22;
                
                //Orange Ghost Images
                var g31 = new Image();
                g31.src='Pictures/g31.png';
                var g32 = new Image();
                g32.src='Pictures/g32.png';
                orangeGhostImages[0] = g31;
                orangeGhostImages[1] = g32;
                
                //Pink Ghost Images
                var g41 = new Image();
                g41.src='Pictures/g41.png';
                var g42 = new Image();
                g42.src='Pictures/g42.png';
                pinkGhostImages[0] = g41;
                pinkGhostImages[1] = g42;
                
                //Pacman Left Images
                var img1 = new Image();
                img1.src='Pictures/l1.png';
                var img2 = new Image();
                img2.src='Pictures/l2.png';
                var img3 = new Image();
                img3.src='Pictures/l3.png';
                var left = [img2,img3,img2,img1];
                
                //Pacman Right Images
                var img1 = new Image();
                img1.src='Pictures/r1.png';
                var img2 = new Image();
                img2.src='Pictures/r2.png';
                var img3 = new Image();
                img3.src='Pictures/r3.png';
                var right = [img2,img3,img2,img1];
                
                //Pacman Down Images
                var img1 = new Image();
                img1.src='Pictures/d1.png';
                var img2 = new Image();
                img2.src='Pictures/d2.png';
                var img3 = new Image();
                img3.src='Pictures/d3.png';
                var down = [img2,img3,img2,img1];
                
                //Pacman Up Images
                var img1 = new Image();
                img1.src='Pictures/u1.png';
                var img2 = new Image();
                img2.src='Pictures/u2.png';
                var img3 = new Image();
                img3.src='Pictures/u3.png';
                var up = [img2,img3,img2,img1];
                
                PacImg[0] = img2;
                PacImg[1] = img3;
                PacImg[2] = img2;
                PacImg[3] = img2;
        }

        // load only, if images are supported
        if (document.images) preLoad();
        
        function ghostimgAnimations {
                requestAnimationFrame(ghostimgAnimations);
                
                if (frame%2) {
                        document.getElementById("gLr1").innerHTML = <img name="g_i1" src="Pictures/g12.png">
                        document.getElementById("gLr2").innerHTML = <img name="g_i1" src="Pictures/g22.png">
                        document.getElementById("gLr3").innerHTML = <img name="g_i1" src="Pictures/g32.png">
                        document.getElementById("gLr4").innerHTML = <img name="g_i1" src="Pictures/g42.png">
                } else {
                        document.getElementById("gLr1").innerHTML = <img name="g_i1" src="Pictures/g11.png">
                        document.getElementById("gLr2").innerHTML = <img name="g_i1" src="Pictures/g21.png">
                        document.getElementById("gLr3").innerHTML = <img name="g_i1" src="Pictures/g31.png">
                        document.getElementById("gLr4").innerHTML = <img name="g_i1" src="Pictures/g41.png">
                }
        }
         ghostimgAnimations();
}
