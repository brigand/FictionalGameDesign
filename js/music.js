
var music = {};
var gameMusic = new EightBit();

gameMusic.setTimeSignature(2, 2);
gameMusic.setTempo(200);

var rightHand = gameMusic.createInstrument('square'),
    leftHand = gameMusic.createInstrument('triangle');

/**
 * Intro
 */
    // Bar 1
rightHand.note('E5, F#4', 'quarter')
    .note('E5, F#4', 'quarter')
    .rest('quarter')
    .note('E5, F#4', 'quarter');

leftHand.note('D3', 'quarter')
    .note('D3', 'quarter')
    .rest('quarter')
    .note('D3', 'quarter');

// Bar2
rightHand.rest('quarter')
    .note('C5, F#4', 'quarter')
    .note('E5, F#4', 'quarter')
    .rest('quarter');

leftHand.rest('quarter')
    .note('D3', 'quarter')
    .note('D3', 'quarter')
    .rest('quarter');

// Bar 3
rightHand.note('G5, B4, G4', 'quarter')
    .rest('quarter')
    .rest('half');

leftHand.rest('whole');

// Bar 4
rightHand.note('G4', 'quarter')
    .rest('quarter')
    .rest('half');

leftHand.note('G3', 'quarter')
    .rest('quarter')
    .rest('half');

// Bar 5/13
rightHand.repeatStart()
    .note('C5, E4', 'quarter')
    .rest('quarter')
    .rest('quarter')
    .note('G4, C4', 'quarter');

leftHand.repeatStart()
    .note('G3', 'quarter')
    .rest('quarter')
    .rest('quarter')
    .note('E3', 'quarter');

// bar 6/14
rightHand.rest('half')
    .note('E4, G3', 'quarter')
    .rest('quarter');

leftHand.rest('half')
    .note('C3', 'quarter')
    .rest('quarter');

// Bar 7/15
rightHand.rest('quarter')
    .note('A4, C4', 'quarter')
    .rest('quarter')
    .note('B4, D4', 'quarter');

leftHand.rest('quarter')
    .note('F3', 'quarter')
    .rest('quarter')
    .note('G3', 'quarter');

// Bar 8/16
rightHand.rest('quarter')
    .note('Bb4, Db4', 'quarter')
    .note('A4, C4', 'quarter')
    .rest('quarter');

leftHand.rest('quarter')
    .note('Gb3', 'quarter')
    .note('F3', 'quarter')
    .rest('quarter');

// Bar 9/17
rightHand.note('G4, C4', 'tripletHalf')
    .note('E5, G4', 'tripletHalf')
    .note('G5, B4', 'tripletHalf');

leftHand.note('E3', 'tripletHalf')
    .note('C4', 'tripletHalf')
    .note('E4', 'tripletHalf');

// Bar 10/18
rightHand.note('A5, C5', 'quarter')
    .rest('quarter')
    .note('F5, A4', 'quarter')
    .note('G5, B4', 'quarter');

leftHand.note('F4', 'quarter')
    .rest('quarter')
    .note('D4', 'quarter')
    .note('E4', 'quarter');

// Bar 11/19
rightHand.rest('quarter')
    .note('E5, G4', 'quarter')
    .rest('quarter')
    .note('C5, E4', 'quarter');

leftHand.rest('quarter')
    .note('C4', 'quarter')
    .rest('quarter')
    .note('A3', 'quarter');

// Bar 12/20
rightHand.note('D5, F4', 'quarter')
    .note('B4, D4', 'quarter')
    .rest('half');

// Repeat back to Bar 5
rightHand.repeat();

leftHand.note('B3', 'quarter')
    .note('G3', 'quarter')
    .rest('half');

// Repeat back to Bar 5
leftHand.repeat();

// Bar 21
rightHand.rest('half')
    .note('G5, E5', 'quarter')
    .note('Gb5, Eb5', 'quarter');

leftHand.note('C3', 'quarter')
    .rest('quarter')
    .rest('quarter')
    .note('G3', 'quarter');

// Bar 22
rightHand.note('F5, D5', 'quarter')
    .note('D#5, B4', 'quarter')
    .rest('quarter')
    .note('E5, C5', 'quarter');

leftHand.rest('half')
    .note('C4', 'quarter')
    .rest('quarter');

// Bar 23
rightHand.rest('quarter')
    .note('G#4, E4', 'quarter')
    .note('A4, F4', 'quarter')
    .note('C5, A4', 'quarter');

leftHand.note('F3', 'quarter')
    .rest('quarter')
    .rest('quarter')
    .note('C4', 'quarter');

// Bar 24
rightHand.rest('quarter')
    .note('A4, C4', 'quarter')
    .note('C5, E4', 'quarter')
    .note('D5, F4', 'quarter');

leftHand.note('C4', 'quarter')
    .rest('quarter')
    .note('F3', 'quarter')
    .rest('quarter');

// Bar 25
rightHand.rest('half')
    .note('G5, E5', 'quarter')
    .note('Gb5, Eb5', 'quarter');

leftHand.note('C3', 'quarter')
    .rest('quarter')
    .rest('quarter')
    .note('E3', 'quarter');

// Bar 26
rightHand.note('F5, D5', 'quarter')
    .note('D#5, B4', 'quarter')
    .rest('quarter')
    .note('E5, C5', 'quarter');

leftHand.rest('half')
    .note('G3', 'quarter')
    .note('C4', 'quarter');

// Bar 27
rightHand.rest('quarter')
    .note('C6, G6, F6', 'quarter')
    .rest('quarter')
    .note('C6, G6, F6', 'quarter');

leftHand.rest('whole');

// Bar 28
rightHand.note('C6, G6, F6', 'quarter')
    .rest('quarter')
    .rest('half');

leftHand.rest('half')
    .note('G3', 'quarter')
    .rest('quarter');

// Bar 29
rightHand.rest('half')
    .note('G5, E5', 'quarter')
    .note('Gb5, Eb5', 'quarter');

leftHand.note('C3', 'quarter')
    .rest('quarter')
    .rest('quarter')
    .note('G3', 'quarter');

// Bar 30
rightHand.note('F5, D5', 'quarter')
    .note('D#5, B4', 'quarter')
    .rest('quarter')
    .note('E5, C5', 'quarter');

leftHand.rest('half')
    .note('C4', 'quarter')
    .rest('quarter');

// Bar 31
rightHand.rest('quarter')
    .note('G#4, E4', 'quarter')
    .note('A4, F4', 'quarter')
    .note('C5, A4', 'quarter');

leftHand.note('F3', 'quarter')
    .rest('quarter')
    .rest('quarter')
    .note('C4', 'quarter');

// Bar 32
rightHand.rest('quarter')
    .note('A4, C4', 'quarter')
    .note('C5, E4', 'quarter')
    .note('D5, F4', 'quarter');

leftHand.note('C4', 'quarter')
    .rest('quarter')
    .note('F3', 'quarter')
    .rest('quarter');

// Bar 33
rightHand.rest('half')
    .note('Eb5, Ab4', 'quarter')
    .rest('quarter');

leftHand.note('C3', 'quarter')
    .rest('quarter')
    .note('Ab3', 'quarter')
    .rest('quarter');

// Bar 34
rightHand.rest('quarter')
    .note('D5, F4', 'quarter')
    .rest('half');

leftHand.rest('quarter')
    .note('Bb3', 'quarter')
    .rest('half');

// Bar 35
rightHand.note('C5, E4', 'quarter')
    .rest('quarter')
    .rest('half');

leftHand.note('C4', 'quarter')
    .rest('quarter')
    .rest('quarter')
    .note('G3', 'quarter');

// Bar 36
rightHand.rest('whole');

leftHand.note('G3', 'quarter')
    .rest('quarter')
    .note('C3', 'quarter')
    .rest('quarter');

rightHand.finish();
leftHand.finish();

gameMusic.end();

music.playing = music.paused = music.muted = false;
music.volume = 100;

gameMusic.onFinished(function() {
        music.play();
});

music.play = function() {
    music.playing = true;
    music.paused = false;
    gameMusic.play();
};

music.mute = function() {
    if (music.muted) {
        gameMusic.unmute();
    } else {
        gameMusic.mute();
    }
    music.muted = ! music.muted;
};

music.stop = function() {
    music.playing = music.paused = music.muted = false;
    gameMusic.stop();
};

music.pause = function() {
    music.paused = true;
    gameMusic.pause();
};
