navigator.sendBeacon = () => 0;
// Math.random = () => 0;
Element.prototype.addEventListener = function (a, b, c) {
  switch (a) {
    case "animationend":
    case "animationiteration":
    case "animationstart":
    case "auxclick":
    case "compositionend":
    case "compositionstart":
    case "compositionupdate":
    case "dblclick":
    case "encrypted":
    case "error":
    case "gotpointercapture":
    case "lostpointercapture":
    case "pointercancel":
    case "pointerdown":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "pointerup":
    case "touchcancel":
    case "touchend":
    case "touchmove":
    case "touchstart":
      return 0;
    default:
      return EventTarget.prototype.addEventListener.call(this, a, b, c);
  }
}
  // var z = {};
Object.prototype.hasOwnProperty.call = (a, b) => {
  switch (b) {
    case "aria-activedescendant":
    case "aria-atomic":
    case "aria-autocomplete":
    case "aria-busy":
    case "aria-controls":
    case "aria-current":
    case "aria-describedby":
    case "aria-disabled":
    case "aria-expanded":
    case "aria-haspopup":
    case "aria-hidden":
    case "aria-invalid":
    case "aria-keyshortcuts":
    // case "aria-label":
    case "aria-labelledby":
    case "aria-live":
    case "aria-multiline":
    case "aria-pressed":
    case "aria-readonly":
    case "aria-required":
    case "aria-selected":
    case "aria-valuemax":
    case "aria-valuemin":
    case "aria-valuenow":
    case "aria-valuetext":
    case "ariaActiveDescendant":
    case "ariaControls":
    case "ariaDescribedBy":
    case "ariaExpanded":
    case "ariaHasPopup":
    // case "ariaLabel":
    case "ariaLabelledBy":
    case "data-testid":
    case "onAuxClick":
    case "onTouchEnd":
    case "role":
    case "tabIndex":
      return 0;
    default:
      // typeof b == "string" && b.length > 2 && (z[b] ? ++z[b] : z[b] = 1);
      return b in a;
  }
}