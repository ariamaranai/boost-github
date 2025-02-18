navigator.sendBeacon = () => 0;
{
  let setAttr = Element.prototype.setAttribute;
  Element.prototype.setAttribute = function (a, b) {
    switch (a) {
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
      case "aria-label":
      case "aria-labelledby":
      case "aria-level":
      case "aria-live":
      case "aria-modal":
      case "aria-multiline":
      case "aria-pressed":
      case "aria-readonly":
      case "aria-selected":
      case "aria-valuemax":
      case "aria-valuemin":
      case "data-hotkey":
      case "data-hotkey-scope":
      case "role":
      case "tabindex":
      case "title":
        break;
      default:
        return setAttr.call(this, a, b);
    }
  }
}