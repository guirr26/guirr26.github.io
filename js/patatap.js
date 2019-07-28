var keyData = {

    q: {
    sound: new Howl({
    src: ['sounds/bubbles.mp3']
    }),
    color: '#1abc9c'
    },
    w: {
    sound: new Howl({
    src: ['sounds/clay.mp3']
    }),
    color: '#2ecc71'
    },
    e: {
    sound: new Howl({
    src: ['sounds/confetti.mp3']
    }),
    color: '#3498db'
    },
    r: {
    sound: new Howl({
    src: ['sounds/corona.mp3']
    }),
    color: '#9b59b6'
    },
    t: {
    sound: new Howl({
    src: ['sounds/dotted-spiral.mp3']
    }),
    color: '#34495e'
    },
    y: {
    sound: new Howl({
    src: ['sounds/flash-1.mp3']
    }),
    color: '#16a085'
    },
    u: {
    sound: new Howl({
    src: ['sounds/flash-2.mp3']
    }),
    color: '#27ae60'
    },
    i: {
    sound: new Howl({
    src: ['sounds/flash-3.mp3']
    }),
    color: '#2980b9'
    },
    o: {
    sound: new Howl({
    src: ['sounds/glimmer.mp3']
    }),
    color: '#8e44ad'
    },
    p: {
    sound: new Howl({
    src: ['sounds/moon.mp3']
    }),
    color: '#2c3e50'
    },
    a: {
    sound: new Howl({
    src: ['sounds/pinwheel.mp3']
    }),
    color: '#f1c40f'
    },
    s: {
    sound: new Howl({
    src: ['sounds/piston-1.mp3']
    }),
    color: '#e67e22'
    },
    d: {
    sound: new Howl({
    src: ['sounds/piston-2.mp3']
    }),
    color: '#e74c3c'
    },
    f: {
    sound: new Howl({
    src: ['sounds/prism-1.mp3']
    }),
    color: '#95a5a6'
    },
    g: {
    sound: new Howl({
    src: ['sounds/prism-2.mp3']
    }),
    color: '#f39c12'
    },
    h: {
    sound: new Howl({
    src: ['sounds/prism-3.mp3']
    }),
    color: '#d35400'
    },
    j: {
    sound: new Howl({
    src: ['sounds/splits.mp3']
    }),
    color: '#1abc9c'
    },
    k: {
    sound: new Howl({
    src: ['sounds/squiggle.mp3']
    }),
    color: '#2ecc71'
    },
    l: {
    sound: new Howl({
    src: ['sounds/strike.mp3']
    }),
    color: '#3498db'
    },
    z: {
    sound: new Howl({
    src: ['sounds/suspension.mp3']
    }),
    color: '#9b59b6'
    },
    x: {
    sound: new Howl({
    src: ['sounds/timer.mp3']
    }),
    color: '#34495e'
    },
    c: {
    sound: new Howl({
    src: ['sounds/ufo.mp3']
    }),
    color: '#16a085'
    },
    v: {
    sound: new Howl({
    src: ['sounds/veil.mp3']
    }),
    color: '#27ae60'
    },
    b: {
    sound: new Howl({
    src: ['sounds/wipe.mp3']
    }),
    color: '#2980b9'
    },
    n: {
    sound: new Howl({
    src: ['sounds/zig-zag.mp3']
    }),
    color: '#8e44ad'
    },
    m: {
    sound: new Howl({
    src: ['sounds/moon.mp3']
    }),
    color: '#2c3e50'
    }
}

$(document).keypress(function(event) {
    switch(event.which) {
        case 65:
            keyData.a.sound.play();
            break;
        case 66:
            keyData.b.sound.play();
            break;
        case 67:
            keyData.c.sound.play();
            break;
        case 68:
            keyData.d.sound.play();
            break;
        case 69:
            keyData.e.sound.play();
            break;
        case 70:
            keyData.f.sound.play();
            break;
        case 71:
            keyData.g.sound.play();
            break;
        case 72:
            keyData.h.sound.play();
            break;
        case 73:
            keyData.i.sound.play();
            break;
        case 74:
            keyData.j.sound.play();
            break;
        case 75:
            keyData.k.sound.play();
            break;
        case 76:
            keyData.l.sound.play();
            break;
        case 77:
            keyData.m.sound.play();
            break;
        case 78:
            keyData.n.sound.play();
            break;
        case 79:
            keyData.o.sound.play();
            break;
        case 80:
            keyData.p.sound.play();
            break;
        case 81:
            keyData.q.sound.play();
            break;
        case 82:
            keyData.r.sound.play();
            break;
        case 83:
            keyData.s.sound.play();
            break;
        case 84:
            keyData.t.sound.play();
            break;
        case 85:
            keyData.u.sound.play();
            break;
        case 86:
            keyData.v.sound.play();
            break;
        case 87:
            keyData.w.sound.play();
            break;
        case 88:
            keyData.x.sound.play();
            break;
        case 89:
            keyData.y.sound.play();
            break;
        case 90:
            keyData.z.sound.play();
            break;
        default:
            break;
    }
});