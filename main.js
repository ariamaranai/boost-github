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
  let hasOwnProperty = Object.prototype.hasOwnProperty;
  Object.prototype.hasOwnProperty = function (a) {
    switch (a) {
      case "alt":
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
      case "aria-presswed":
      case "aria-required":
      case "ariaActiveDescendant":
      case "ariaAtomic":
      case "ariaAutoComplete":
      case "ariaBusy":
      case "ariaChecked":
      case "ariaColCount":
      case "ariaColIndex":
      case "ariaColSpan":
      case "ariaControls":
      case "ariaDescribedBy":
      case "ariaDetails":
      case "ariaDisabled":
      case "ariaErrorMessage":
      case "ariaExpanded":
      case "ariaFlowTo":
      case "ariaGrabbed":
      case "ariaHasPopup":
      case "ariaHidden":
      case "ariaInvalid":
      case "ariaKeyShortcuts":
      case "ariaLabel":
      case "ariaLabelledBy":
      case "ariaLevel":
      case "ariaLive":
      case "ariaModal":
      case "ariaMultiLine":
      case "ariaMultiSelectable":
      case "ariaOrientation":
      case "ariaOwns":
      case "ariaPlaceholder":
      case "ariaPosInSet":
      case "ariaPressed":
      case "ariaReadOnly":
      case "ariaRelevant":
      case "ariaRequired":
      case "ariaRoleDescription":
      case "ariaRowCount":
      case "ariaRowIndex":
      case "ariaRowSpan":
      case "ariaSelected":
      case "ariaSetSize":
      case "ariaSort":
      case "ariaValueMax":
      case "ariaValueMin":
      case "ariaValueNow":
      case "ariaValueText":
      case "borderRadius":
      case "role":
      case "tabIndex":
      case "textDecoration":
      case "title":
        return 0;
      default:
        return hasOwnProperty.call(this, a);
    }

  }
}