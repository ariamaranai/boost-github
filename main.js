navigator.sendBeacon = () => 0;
// Math.random = () => 0;
{
  // var z = {};
  Object.prototype.hasOwnProperty.call = (a, b) => {
    switch (b) {
      case "aria-activedescendant":
      case "aria-busy":
      case "aria-controls":
      case "aria-current":
      case "aria-describedby":
      case "aria-disabled":
      case "aria-expanded":
      case "aria-haspopup":
      case "aria-hidden":
      case "aria-invalid":
      case "aria-label":
      case "aria-labelledby":
      case "aria-pressed":
      case "aria-required":
      case "ariaActiveDescendant":
      case "ariaControls":
      case "ariaDescribedBy":
      case "ariaExpanded":
      case "ariaHasPopup":
      case "ariaLabel":
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
}