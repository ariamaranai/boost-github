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
  // var kkk = {};
  Object.prototype.hasOwnProperty = function (a) {
    switch (a) {
      case "@media screen and (max-width: 320px)":
      case "@media screen and (max-width: 380px)":
      case "alt":
      case "altKey":
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
      case "aria-keyshortcuts":
      case "aria-label":
      case "aria-labelledby":
      case "aria-lebel":
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
      case "autoCorrect":
      case "autoFocus":
      case "borderRadius":
      case "borderTopRightRadius":
      case "borderTopLeftRadius":
      case "data-hover-color":
      case "data-hovercard-url":
      case "data-inactive":
      case "data-testid":
      case "label":
      case "metaKey":
      case "onError":
      case "onMouseEnter":
      case "onMouseLeave":
      case "onMouseOut":
      case "onMouseOver":
      case "role":
      case "showEnterprise":
      case "showEnterpriseSettings":
      case "showEnterprises":
      case "showSponsors":
      case "spellCheck":
      case "tabIndex":
      case "textDecoration":
      case "tiltX":
      case "tiltY":
      case "title":
      case "twist":
      case "xmlns":
        return 0;
      default:
        // typeof a == "string" && a.length > 2 && (kkk[a] ? ++kkk[a] : kkk[a] = 1);
        return Object.hasOwn(this, a);
    }
  }
}