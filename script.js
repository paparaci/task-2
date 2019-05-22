document.getElementById('button').onclick = function () {
    var position = document.getElementById('pos').value;
    var p = document.getElementById('out');
    if (position == 'a1' || position == 'A1') p.innerHTML = 'B3 C2';
    else if (position == 'a2' || position == 'A2') p.innerHTML = 'B4 C3 C1';
    else if (position == 'a3' || position == 'A3') p.innerHTML = 'B5 C4 C2 B1';
    else if (position == 'a4' || position == 'A4') p.innerHTML = 'B6 C5 C3 B2';
    else if (position == 'a5' || position == 'A5') p.innerHTML = 'B7 C6 C4 B3';
    else if (position == 'a6' || position == 'A6') p.innerHTML = 'B8 C7 C5 B4';
    else if (position == 'a7' || position == 'A7') p.innerHTML = ' C6 C8 B5';
    else if (position == 'a8' || position == 'A8') p.innerHTML = 'C7 B6';

    else if (position == 'b1' || position == 'B1') p.innerHTML = 'A3 C3 D2';
    else if (position == 'b2' || position == 'B2') p.innerHTML = 'A4 C4 D3 D1';
    else if (position == 'b3' || position == 'B3') p.innerHTML = 'A1 A5 C5 C1 D4 D2';
    else if (position == 'b4' || position == 'B4') p.innerHTML = 'A2 A6 C6 C2 D5 D3';
    else if (position == 'b5' || position == 'B5') p.innerHTML = 'A3 A7 C7 C3 D6 D4';
    else if (position == 'b6' || position == 'B6') p.innerHTML = 'A4 A8 C8 C4 D7 D5';
    else if (position == 'b7' || position == 'B7') p.innerHTML = 'A5 C5 D8 D6';
    else if (position == 'b8' || position == 'B8') p.innerHTML = 'A6 C6 D7';
    
    else if (position == 'c1' || position == 'C1') p.innerHTML = 'B3 D3 A2 E2';
    else if (position == 'c2' || position == 'C2') p.innerHTML = 'A1 A3 E1 E3 B4 D4';
    else if (position == 'c3' || position == 'C3') p.innerHTML = 'B1 D1 B5 C5 A2 A4 E2 E4';
    else if (position == 'c4' || position == 'C4') p.innerHTML = 'B2 D2 B6 C6 A3 A5 E3 E5';
    else if (position == 'c5' || position == 'C5') p.innerHTML = 'B3 D3 B7 C7 A4 A6 E4 E6';
    else if (position == 'c6' || position == 'C6') p.innerHTML = 'B4 D4 B8 C8 A5 A7 E5 E7';
    else if (position == 'c7' || position == 'C7') p.innerHTML = 'B5 D5 A6 A8 E6 E8';
    else if (position == 'c8' || position == 'C8') p.innerHTML = 'B6 D6 A7 E7';
    
    else if (position == 'd1' || position == 'D1') p.innerHTML = 'C3 E3 B2 F2';
    else if (position == 'd2' || position == 'D2') p.innerHTML = 'B1 B3 F1 F3 C4 E4';
    else if (position == 'd3' || position == 'D3') p.innerHTML = 'C1 E1 C5 D5 B2 B4 F2 F4';
    else if (position == 'd4' || position == 'D4') p.innerHTML = 'C2 E2 C6 D6 B3 B5 F3 F5';
    else if (position == 'd5' || position == 'D5') p.innerHTML = 'C3 E3 C7 D7 B4 B6 F4 F6';
    else if (position == 'd6' || position == 'D6') p.innerHTML = 'C4 E4 C8 D8 B5 B7 F5 F7';
    else if (position == 'd7' || position == 'D7') p.innerHTML = 'C5 E5 B6 B8 F6 F8';
    else if (position == 'd8' || position == 'D8') p.innerHTML = 'C6 E6 B7 F7';
    
    else if (position == 'e1' || position == 'E1') p.innerHTML = 'D3 F3 C2 G2';
    else if (position == 'e2' || position == 'E2') p.innerHTML = 'C1 C3 G1 G3 D4 F4';
    else if (position == 'e3' || position == 'E3') p.innerHTML = 'D1 F1 D5 E5 C2 C4 G2 G4';
    else if (position == 'e4' || position == 'E4') p.innerHTML = 'D2 F2 D6 E6 C3 C5 G3 G5';
    else if (position == 'e5' || position == 'E5') p.innerHTML = 'D3 F3 D7 E7 C4 C6 G4 G6';
    else if (position == 'e6' || position == 'E6') p.innerHTML = 'D4 F4 D8 E8 C5 C7 G5 G7';
    else if (position == 'e7' || position == 'E7') p.innerHTML = 'D5 F5 C6 C8 G6 G8';
    else if (position == 'e8' || position == 'E8') p.innerHTML = 'D6 F6 C7 G7';
    
    else if (position == 'f1' || position == 'F1') p.innerHTML = 'E3 G3 D2 H2';
    else if (position == 'f2' || position == 'F2') p.innerHTML = 'D1 D3 H1 H3 E4 G4';
    else if (position == 'f3' || position == 'F3') p.innerHTML = 'E1 G1 E5 F5 D2 D4 H2 H4';
    else if (position == 'f4' || position == 'F4') p.innerHTML = 'E2 G2 E6 F6 D3 D5 H3 H5';
    else if (position == 'f5' || position == 'F5') p.innerHTML = 'E3 G3 E7 F7 D4 D6 H4 H6';
    else if (position == 'f6' || position == 'F6') p.innerHTML = 'E4 G4 E8 F8 D5 D7 H5 H7';
    else if (position == 'f7' || position == 'F7') p.innerHTML = 'E5 G5 D6 D8 H6 G8';
    else if (position == 'f8' || position == 'F8') p.innerHTML = 'E6 G6 D7 H7';
    
    else if (position == 'g1' || position == 'G1') p.innerHTML = 'E2 F3 H3';
    else if (position == 'g2' || position == 'G2') p.innerHTML = 'E1 E3 F4 H4';
    else if (position == 'g3' || position == 'G3') p.innerHTML = 'H1 F1 E2 E4 F5 H5';
    else if (position == 'g4' || position == 'G4') p.innerHTML = 'H2 F2 E3 E5 F6 H6';
    else if (position == 'g5' || position == 'G5') p.innerHTML = 'H3 F3 E4 E6 F7 H7';
    else if (position == 'g6' || position == 'G6') p.innerHTML = 'H4 F4 E5 E7 F8 H8';
    else if (position == 'g7' || position == 'G7') p.innerHTML = 'H5 F5 E6 E8';
    else if (position == 'g8' || position == 'G8') p.innerHTML = 'H6 F6 E7';
    
    else if (position == 'h1' || position == 'H1') p.innerHTML = 'F2 H3';
    else if (position == 'h2' || position == 'H2') p.innerHTML = 'F1 F3 H4';
    else if (position == 'h3' || position == 'H3') p.innerHTML = 'F2 F4 G1 G5';
    else if (position == 'h4' || position == 'H4') p.innerHTML = 'F3 F5 G2 G6';
    else if (position == 'h5' || position == 'H5') p.innerHTML = 'F4 F6 G3 G7';
    else if (position == 'h6' || position == 'H6') p.innerHTML = 'F5 F7 G4 G8';
    else if (position == 'h7' || position == 'H7') p.innerHTML = 'F6 F8 G5';
    else if (position == 'h8' || position == 'H8') p.innerHTML = 'F7 G6';
    
}
