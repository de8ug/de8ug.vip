(function () {

  var bv = new Bideo();
  bv.init({
    // Video element
    videoEl: document.querySelector('#background_video'),

    // Container element
    container: document.querySelector('body'),

    // Resize
    resize: true,

    // autoplay: false,

    isMobile: window.matchMedia('(max-width: 768px)').matches,

    playButton: document.querySelector('#play'),
    pauseButton: document.querySelector('#pause'),

    // Array of objects containing the src and type
    // of different video formats to add
    src: [
      {
        src: 'https://xiaozao-time.oss-cn-beijing.aliyuncs.com/de8ug.vip/bgvideo-%E5%B0%8F%E7%81%B6%E6%97%B6%E9%97%B4.mov?Expires=1585569179&OSSAccessKeyId=TMP.3Ke9Cked6byuMNcaayX4WjNWqMDRpgViVXUxHivr9GHRFvK2SzcLjNv2URdnAPUinvv3HJ6JjQbZCrmapmNcJNkt6iV2Ld&Signature=KVrmi%2FheE0NxW5WP19HoHEKjej4%3D',
        type: 'video/mp4'
      },
      // {
      //   src: 'night.webm',
      //   type: 'video/webm;codecs="vp8, vorbis"'
      // }
    ],

    // What to do once video loads (initial frame)
    onLoad: function () {
      document.querySelector('#video_cover').style.display = 'none';
    }
  });
}());
