const dib = document.getElementById("canva");
const ctx = dib.getContext("2d");

//Contorno Cabeza
ctx.fillStyle = "rgb(47, 10, 22)";
ctx.fillRect(140, 40, 8, 8);
ctx.fillRect(148, 40, 8, 8);
ctx.fillRect(156, 40, 8, 8);
ctx.fillRect(156, 48, 8, 8);
ctx.fillRect(164, 56, 8, 8);
ctx.fillRect(140, 48, 8, 8);
ctx.fillRect(140, 56, 8, 8);
ctx.fillRect(172, 64, 8, 8);
ctx.fillRect(132, 64, 8, 8);
ctx.fillRect(132, 72, 8, 8);
ctx.fillRect(132, 80, 8, 8);
ctx.fillRect(132, 88, 8, 8);
ctx.fillRect(172, 72, 8, 8);
ctx.fillRect(172, 80, 8, 8);
ctx.fillRect(172, 88, 8, 8);
ctx.fillRect(180, 96, 8, 8);
ctx.fillRect(172, 96, 8, 8);
ctx.fillRect(140, 96, 8, 8);
ctx.fillRect(148, 104, 8, 8);
ctx.fillRect(188, 104, 8, 8);
ctx.fillRect(180, 104, 8, 8);
ctx.fillRect(196, 104, 8, 8);
ctx.fillRect(196, 96, 8, 8);
ctx.fillRect(204, 88, 8, 8);
ctx.fillRect(212, 88, 8, 8);
ctx.fillRect(212, 96, 8, 8);
ctx.fillRect(212, 104, 8, 8);
ctx.fillRect(220, 96, 8, 8);
ctx.fillRect(228, 88, 8, 8);
ctx.fillRect(236, 88, 8, 8);
ctx.fillRect(236, 96, 8, 8);
ctx.fillRect(236, 104, 8, 8);
ctx.fillRect(244, 104, 8, 8);
ctx.fillRect(252, 104, 8, 8);
ctx.fillRect(260, 96, 8, 8);
ctx.fillRect(268, 96, 8, -16);
ctx.fillRect(276, 80, 8, 8);
ctx.fillRect(284, 72, 40, 8);
ctx.fillRect(324, 72, 8, 48);
ctx.fillRect(316, 120, 8, 8);
ctx.fillRect(308, 128, 8, 8);
ctx.fillRect(284, 136, 24, 8);
ctx.fillRect(284, 144, 8, 8);
ctx.fillRect(292, 152, 8, 24);
ctx.fillRect(300, 176, 24, 8);
ctx.fillRect(316, 176, 8, 24);
ctx.fillRect(316, 200, -16, 8);
ctx.fillRect(300, 208, 8, 8);
ctx.fillRect(308, 216, 8, 16);
ctx.fillRect(308, 224, -24, 8);
ctx.fillRect(284, 224, 8, 24);
ctx.fillRect(292, 248, -24, 8);
ctx.fillRect(268, 256, -16, 8);
ctx.fillRect(252, 264, -16, 8);
ctx.fillRect(236, 272, -24, 8);
ctx.fillRect(212, 280, -64, 8);
ctx.fillRect(148, 264, 8, 24);
ctx.fillRect(140, 248, 8, 16);
ctx.fillRect(132, 184, 8, 8);
ctx.fillRect(124, 168, 8, 16);
ctx.fillRect(124, 168, 24, 8);
ctx.fillRect(156, 160, -16, 8);
ctx.fillRect(148, 160, 8, -32);
ctx.fillRect(156, 136, 8, -24);
ctx.fillRect(188, 160, 16, 8);
ctx.fillRect(196, 168, 8, 8);
ctx.fillRect(252, 208, 48, 8);
ctx.fillRect(260, 216, 16, 8);
ctx.fillRect(276, 224, 8, 8);
ctx.fillRect(276, 168, 16, 8);
ctx.fillRect(268, 176, 8, -16);
ctx.fillRect(180, 112, -16, 8);
ctx.fillRect(268, 112, -16, 8);
ctx.fillRect(276, 120, -16, 8);
ctx.fillRect(284, 128, -16, 8);
ctx.fillRect(284, 136, -8, 8);
ctx.fill();

//Color 1 Orejas
ctx.beginPath();
ctx.fillStyle = "rgb(190, 93, 74)";
ctx.fillRect(148, 48, 8, 8);
ctx.fillRect(148, 56, 16, 8);
ctx.fillRect(140, 64, 8, 8);
ctx.fillRect(324, 80, -40, 8);
ctx.fillRect(164, 120, 16, 8);
ctx.fill();

//Color 2 Orejas
ctx.beginPath();
ctx.fillStyle = "rgb(153, 39, 37)";
ctx.fillRect(276, 88, 8, 8);
ctx.fillRect(268, 96, 8, 8);
ctx.fillRect(148, 64, 8, 16);
ctx.fillRect(204, 96, 8, 16);
ctx.fillRect(204, 96, 8, 16);
ctx.fillRect(164, 128, 24, 8);
ctx.fillRect(156, 136, 24, 8);
ctx.fillRect(180, 128, 8, -16);
ctx.fillRect(180, 272, -24, 8);
ctx.fill();

//Color 3 Orejas
ctx.beginPath();
ctx.fillStyle = "rgb(207, 139, 123)";
ctx.fillRect(284, 120, 8, -24);
ctx.fillRect(292, 120, 8, -32);
ctx.fillRect(300, 112, 8, -24);
ctx.fillRect(140, 176, 8, 16);
ctx.fillRect(148, 184, 8, 8);
ctx.fill();

//Color 3 Orejas
ctx.beginPath();
ctx.fillStyle = "rgb(168, 106, 87)";
ctx.fillRect(148, 80, 8, 16);
ctx.fillRect(140, 72, 8, 16);
ctx.fillRect(188, 176, 24, 8);
ctx.fillRect(180, 184, 8, 8);
ctx.fillRect(188, 192, 16, 8);
ctx.fillRect(204, 184, 32, 8);
ctx.fillRect(212, 192, 24, 8);
ctx.fill();

//Color Boca
ctx.beginPath();
ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fillRect(156, 144, 8, 32);
ctx.fillRect(164, 144, 24, 8);
ctx.fillRect(180, 152, 8, 16);
ctx.fillRect(164, 168, 16, 8);
ctx.fillRect(188, 168, 8, 8);
ctx.fillRect(212, 144, 32, 8);
ctx.fillRect(212, 152, 8, 24);
ctx.fillRect(220, 168, 8, 8);
ctx.fillRect(220, 176, 24, 8);
ctx.fillRect(244, 152, 8, 24);
ctx.fillRect(244, 120, -24, 8);
ctx.fillRect(252, 128, -40, 8); 
ctx.fillRect(204, 176, 8, -24); 
ctx.fillRect(204, 192, 8, 8);
ctx.fillRect(188, 184, 8, 8);
ctx.fillRect(148, 240, 16, 8);
ctx.fillRect(164, 232, 8, 16);
ctx.fillRect(172, 240, 8, -16);
ctx.fillRect(180, 216, 8, 8);
ctx.fillRect(188, 208, -48, 8);
ctx.fillRect(140, 208, 8, -16);
ctx.fillRect(148, 192, 32, 8);
ctx.fillRect(156, 200, 48, 8);
ctx.fillRect(196, 208, 8, 8);
ctx.fillRect(228, 208, 8, 8);
ctx.fillRect(244, 208, 8, 8);
ctx.fillRect(252, 216, 8, 24);
ctx.fillRect(244, 240, 8, 8);
ctx.fillRect(228, 248, 16, 8);
ctx.fillRect(228, 256, -24, 8);
ctx.fillRect(204, 264, -40, 8);
ctx.fillRect(172, 176, -24, 8);
ctx.fillRect(148, 168, 8, 8);
ctx.fill();

//Color Ojos
ctx.beginPath();
ctx.fillStyle = "rgb(123, 17, 165)";
ctx.fillRect(228, 160, 8, 8);
ctx.fillRect(172, 160, 8, 8);
ctx.fill();

//Color 2 Ojos
ctx.beginPath();
ctx.fillStyle = "rgb(153, 153, 153)";
ctx.fillRect(180, 152, -16, 8);
ctx.fillRect(220, 152, 24, 8);
ctx.fillRect(244, 232, 8, 8);
ctx.fillRect(236, 240, 8, 8);
ctx.fillRect(236, 208, 8, 8);
ctx.fillRect(220, 208, 8, 8);
ctx.fill();

//Color 2 Boca
ctx.beginPath();
ctx.fillStyle = "rgb(115, 67, 52)";
ctx.fillRect(228, 200, -24, 8);
ctx.fillRect(212, 176, 8, 8);
ctx.fillRect(196, 184, 8, 8);
ctx.fillRect(180, 184, 8, -16);
ctx.fillRect(188, 192, -16, 8);
ctx.fillRect(172, 192, 8, -16);
ctx.fillRect(172, 184, -16, 8);
ctx.fill();

//Color Brilloso, Piel
ctx.beginPath();
ctx.fillStyle = "rgb(138, 29, 62)";
ctx.fillRect(316, 184, -40, 8);
ctx.fillRect(316, 192, -24, 8);
ctx.fillRect(300, 176, -32, 8);
ctx.fillRect(284, 232, -16, 8);
ctx.fillRect(284, 240, -24, 8);
ctx.fillRect(268, 248, -8, 8);
ctx.fillRect(268, 224, 8, 8);
ctx.fill();

//Color Piel
ctx.beginPath();
ctx.fillStyle = "rgb(109, 29, 56)";
ctx.fillRect(276, 184, -40, 8);
ctx.fillRect(292, 192, -56, 8);
ctx.fillRect(300, 200, -72, 8);
ctx.fillRect(308, 216, -32, 8);
ctx.fillRect(260, 224, 8, 16);
ctx.fillRect(252, 240, 8, 16);
ctx.fillRect(244, 248, 8, 16);
ctx.fillRect(244, 256, -16, 8);
ctx.fillRect(236, 264, -32, 8);
ctx.fillRect(212, 272, -32, 8);
ctx.fillRect(276, 176, -32, 8);
ctx.fillRect(268, 168, -16, 8);
ctx.fillRect(140, 176, -8, 8);
ctx.fillRect(268, 160, -16, 8);
ctx.fillRect(292, 160, -16, 8);
ctx.fillRect(292, 152, -40, 8);
ctx.fillRect(188, 152, 16, 8);
ctx.fillRect(284, 144, -40, 8);
ctx.fillRect(188, 144, 24, 8);
ctx.fillRect(276, 136, -96, 8);
ctx.fillRect(268, 128, -16, 8);
ctx.fillRect(212, 128, -24, 8);
ctx.fillRect(220, 120, -32, 8);
ctx.fillRect(260, 120, -16, 8);
ctx.fillRect(252, 112, -64, 8);
ctx.fillRect(236, 104, -16, 8);
ctx.fillRect(236, 96, -8, 8);
ctx.fillRect(180, 104, -24, 8);
ctx.fillRect(172, 96, -24, 8);
ctx.fillRect(164, 96, 8, -32);
ctx.fillRect(156, 96, 8, -32);
ctx.fillRect(140, 96, 8, -8);
ctx.fillRect(284, 96, 8, -8);
ctx.fillRect(276, 96, 8, 8);
ctx.fillRect(260, 104, 24, 8);
ctx.fillRect(268, 112, 16, 8);
ctx.fillRect(276, 120, 40, 8);
ctx.fillRect(284, 128, 24, 8);
ctx.fillRect(300, 120, 8, -8);
ctx.fillRect(308, 120, 8, -32);
ctx.fillRect(316, 120, 8, -32);
ctx.fillRect(164, 264, -8, 8);
ctx.fill();

//Color Interior Boca
ctx.beginPath();
ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fillRect(164, 264, -8, -16);
ctx.fillRect(172, 264, -8, -16);
ctx.fillRect(180, 264, -8, -24);
ctx.fillRect(188, 264, -8, -40);
ctx.fillRect(196, 248, -8, -32);
ctx.fillRect(204, 264, -8, -48);
ctx.fillRect(212, 256, -8, -48);
ctx.fillRect(220, 256, -8, -40);
ctx.fillRect(228, 240, -8, -24);
ctx.fillRect(236, 256, -8, -40);
ctx.fillRect(244, 240, -8, -24);
ctx.fillRect(252, 232, -8, -24);
ctx.fill();

//Contorno Brazo Izq
ctx.fillStyle = "rgb(47, 10, 22)";
ctx.fillRect(268, 248, 40, 8);
ctx.fillRect(308, 256, 24, 8);
ctx.fillRect(332, 264, 8, 8);
ctx.fillRect(340, 272, 24, 8);
ctx.fillRect(364, 280, 8, 8);
ctx.fillRect(372, 288, 8, 40);
ctx.fillRect(268, 248, 8, 32);
ctx.fillRect(276, 280, 16, 8);
ctx.fillRect(284, 288, 24, 8);
ctx.fillRect(308, 296, 32, 8);
ctx.fillRect(324, 304, 16, 8);
ctx.fillRect(340, 312, 8, 16);
ctx.fillRect(340, 328, 40, 8);
ctx.fillRect(308, 264, 8, 8);
ctx.fillRect(292, 272, 16, 8);
ctx.fillRect(340, 280, 8, 16);
ctx.fill();

//Color 1 Brazo Izq
ctx.beginPath();
ctx.fillStyle = "rgb(138, 29, 62)";
ctx.fillRect(340, 296, 8, 16);
ctx.fillRect(348, 304, 8, 24);
ctx.fillRect(276, 272, 16, 8);
ctx.fillRect(292, 280, 24, 8);
ctx.fillRect(308, 288, 32, 8);
ctx.fill();

//Color 2 Brazo Izq
ctx.beginPath();
ctx.fillStyle = "rgb(109, 29, 56)";
ctx.fillRect(308, 272, 32, 8);
ctx.fillRect(316, 280, 24, 8);
ctx.fillRect(316, 264, 16, 8);
ctx.fillRect(308, 264, -32, 8);
ctx.fillRect(308, 256, -32, 8);
ctx.fillRect(316, 280, 24, 8);
ctx.fillRect(348, 280, 8, 24);
ctx.fillRect(356, 280, 8, 48);
ctx.fillRect(364, 288, 8, 40);
ctx.fill();

//Contorno Brazo Der
ctx.fillStyle = "rgb(47, 10, 22)";
ctx.fillRect(140, 256, -32, 8);
ctx.fillRect(108, 248, -16, 8);
ctx.fillRect(92, 240, -16, 8);
ctx.fillRect(76, 248, -8, 8);
ctx.fillRect(68, 256, -8, 8);
ctx.fillRect(76, 264, -16, 8);
ctx.fillRect(84, 272, -16, 8);
ctx.fillRect(92, 280, -8, 8);
ctx.fillRect(92, 288, 96, 8);
ctx.fillRect(116, 288, 8, -24);
ctx.fill();

//Color 1 Brazo Der
ctx.beginPath();
ctx.fillStyle = "rgb(153, 39, 37)";
ctx.fillRect(108, 256, -8, 8);
ctx.fillRect(92, 248, -16, 8);
ctx.fillRect(148, 272, -24, 8);
ctx.fill();

//Color 2 Brazo Der
ctx.beginPath();
ctx.fillStyle = "rgb(190, 93, 74)";
ctx.fillRect(148, 264, -24, 8);
ctx.fillRect(116, 264, -16, 8);
ctx.fillRect(100, 256, -16, 8);
ctx.fill();

//Color 3 Brazo Der
ctx.beginPath();
ctx.fillStyle = "rgb(109, 29, 56)";
ctx.fillRect(148, 280, -24, 8);
ctx.fillRect(84, 256, -16, 8);
ctx.fillRect(100, 264, -24, 8);
ctx.fillRect(116, 272, -32, 8);
ctx.fillRect(116, 280, -24, 8);
ctx.fill();

//Contorno Pecho
ctx.fillStyle = "rgb(47, 10, 22)";
ctx.fillRect(180, 288, 8, 40);
ctx.fillRect(188, 312, 8, 32);
ctx.fillRect(196, 344, 88, 8);
ctx.fillRect(284, 288, 8, 64);
ctx.fillRect(260, 296, 8, 48);
ctx.fillRect(252, 280, 8, 16);
ctx.fill();

//Marcas Pecho
ctx.beginPath();
ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fillRect(196, 328, 24, 8);
ctx.fillRect(188, 320, 24, 8);
ctx.fillRect(188, 312, 8, 8);
ctx.fillRect(212, 304, 24, 8);
ctx.fillRect(212, 296, 40, 8);
ctx.fillRect(236, 288, 16, 8);
ctx.fill();

//Color 1 Pecho
ctx.beginPath();
ctx.fillStyle = "rgb(109, 29, 56)";
ctx.fillRect(268, 280, 8, 64);
ctx.fillRect(276, 288, 8, 56);
ctx.fillRect(260, 296, 8, -32);
ctx.fillRect(252, 280, 8, -16);
ctx.fillRect(252, 272, -16, 8);
ctx.fill();

//Oxido Pecho
ctx.beginPath();
ctx.fillStyle = "rgb(115, 67, 52)";
ctx.fillRect(244, 280, 8, 8);
ctx.fillRect(252, 296, 8, 8);
ctx.fillRect(228, 288, 8, 8);
ctx.fillRect(236, 304, 8, 8);
ctx.fillRect(188, 304, 8, 8);
ctx.fillRect(196, 312, 8, 8);
ctx.fillRect(212, 320, 8, 8);
ctx.fillRect(220, 328, 8, 8);
ctx.fill();

//Sombras Pecho
ctx.beginPath();
ctx.fillStyle = "rgb(168, 106, 87)";
ctx.fillRect(220, 336, 40, 8);
ctx.fillRect(228, 328, 32, 8);
ctx.fillRect(236, 320, 24, 8);
ctx.fillRect(244, 312, 16, 8);
ctx.fillRect(252, 304, 8, 8);
ctx.fillRect(212, 288, 16, 8);
ctx.fillRect(212, 280, 32, 8);
ctx.fill();

//Color Interior Pecho
ctx.beginPath();
ctx.fillStyle = "rgb(207, 139, 123)";
ctx.fillRect(188, 288, 24, 8);
ctx.fillRect(188, 296, 24, 8);
ctx.fillRect(196, 304, 16, 8);
ctx.fillRect(244, 304, 8, 8);
ctx.fillRect(204, 312, 40, 8);
ctx.fillRect(220, 320, 16, 8);
ctx.fillRect(196, 336, 24, 8);
ctx.fill();
/*
//Contorno Gancho
ctx.beginPath();
ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fillRect(68, 248, 8, -32);
ctx.fillRect(60, 248, 8, 8);
ctx.fillRect(52, 256, 8, 8);
ctx.fillRect(36, 264, 24, 8);
ctx.fillRect(28, 272, 8, -24);
ctx.fillRect(20, 248, 8, -32);
ctx.fillRect(36, 208, 40, 8);
ctx.fillRect(44, 200, -24, 8);
ctx.fillRect(36, 192, -24, 8);
ctx.fillRect(28, 186, -40, 8);
ctx.fillRect(28, 178, -24, 8);
ctx.fillRect(28, 170, -24, 8);
ctx.fillRect(36, 162, -32, 8);
ctx.fillRect(44, 154, -40, 8);
ctx.fillRect(84, 146, -80, 8);
ctx.fillRect(84, 138, -72, 8);
ctx.fillRect(84, 130, -64, 8);
ctx.fillRect(76, 122, -40, 8);
ctx.fillRect(60, 114, -48, 8);
ctx.fillRect(20, 122, -16, 8);
ctx.fillRect(12, 130, -8, 8);
ctx.fill();
*/ 