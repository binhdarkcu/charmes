<div class="loader">Loading</div>
<style>
#loadingprocess{
  background: #d3c8e3;
}
.loader {
      width: 150px;
    height: 150px;
    line-height: 150px;
    position: absolute;
    box-sizing: border-box;
    text-align: center;
    z-index: 0;
    text-transform: uppercase;
    left: 50%;
    margin-left: -75px;
    top: 50%;
    margin-top: -95px;
    color: #fff;
}

.loader:before,
.loader:after {
  opacity: 0;
  box-sizing: border-box;
  content: "\0020";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 100px;
  border: 5px solid #fff;
  box-shadow: 0 0 50px #fff, inset 0 0 50px #fff;
}

.loader:after {
  z-index: 1;
  -webkit-animation: gogoloader 2s infinite 1s;
}

.loader:before {
  z-index: 2;
  -webkit-animation: gogoloader 2s infinite;
}

@-webkit-keyframes gogoloader {
  0% {
    -webkit-transform: scale(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    opacity: 0;
  }
}

</style>