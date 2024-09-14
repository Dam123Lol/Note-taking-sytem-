const startDictation = document.getElementById('startDictation');
const noteArea = document.getElementById('noteArea');

startDictation.addEventListener('click', () => {
    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'en-US';

        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            noteArea.value += transcript + " ";
        };

        recognition.onerror = function(event) {
            alert("Error occurred in speech recognition: " + event.error);
        };

        recognition.start();
    } else {
        alert("Speech recognition not supported in this browser.");
    }
});


const replayAudio = document.getElementById('replayAudio');
const audioSlider = document.getElementById('audioSlider');

replayAudio.addEventListener('click', () => {
    const audio = new Audio('path_to_audio_file.mp3');
    audio.volume = audioSlider.value / 100;
    audio.play();
});


const fontSelect = document.getElementById('fontSelect');
const colorSelect = document.getElementById('colorSelect');

fontSelect.addEventListener('change', () => {
    const fontSize = fontSelect.value;
    if (fontSize === 'small') {
        noteArea.style.fontSize = '14px';
    } else if (fontSize === 'medium') {
        noteArea.style.fontSize = '18px';
    } else if (fontSize === 'large') {
        noteArea.style.fontSize = '24px';
    }
});

colorSelect.addEventListener('change', () => {
    const theme = colorSelect.value;
    if (theme === 'light') {
        document.body.style.backgroundColor = '#f0f0f0';
        document.body.style.color = '#000';
    } else if (theme === 'dark') {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
    }
});

const sound = new Howl({
    src: ['path_to_audio_file.mp3'], 
    volume: 0.5, 
    loop: false, 
});

