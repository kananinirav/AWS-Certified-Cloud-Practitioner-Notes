// detect Ad-Blocker and display error pop up
function adBlockFunction() {
  console.log('Add Blocker Detected');
  let adp_underlay = document.createElement('div');
  adp_underlay.className = 'adp-underlay';
  document.body.appendChild(adp_underlay);
  let adp = document.createElement('div');
  adp.className = 'adp';
  adp.innerHTML = `
      <image src='./exclamation-mark.png' class='img' />
      <h2>AdBlock Detected!</h2>
      <p>Sorry. We detected that you have activated Ad-Blocker. <br />
        Please Consider supporting us by disabling your Ad-Blocker It helps us in maintaining this website.<br />
        To View the content disable Ad-Blocker and refresh the page. Thank You !!!</p>
    `;
  document.body.appendChild(adp);
  adp.querySelector('a').onclick = e => {
    e.preventDefault();
    document.body.removeChild(adp_underlay);
    document.body.removeChild(adp);
  };
}

function uBlockActive() {
  if (window.adsbygoogle.push.length > 0) {
    return false
  }
  adBlockFunction();
}
