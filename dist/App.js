"use strict";

var SearchInput = React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement("input", Object.assign({
    className: "border border-slate-400 rounded-xl p-3 mt-4",
    placeholder: "Looking for something?"
  }, props, {
    ref: ref
  }));
});
function SearchButton(_ref) {
  var onclick = _ref.onclick;
  return /*#__PURE__*/React.createElement("button", {
    className: "rounded-xl bg-blue-400 font-semibold p-2 w-4/5 active:bg-blue-600",
    onClick: onclick
  }, "Search");
}
function App() {
  var mySearchRef = React.useRef(null);
  function handleBtnFocusClick() {
    mySearchRef.current.focus();
  }
  return /*#__PURE__*/React.createElement("section", {
    className: "h-screen grid place-content-center"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "flex justify-center"
  }, /*#__PURE__*/React.createElement(SearchButton, {
    onclick: handleBtnFocusClick
  })), /*#__PURE__*/React.createElement(SearchInput, {
    ref: mySearchRef
  }));
}
var root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render( /*#__PURE__*/React.createElement(App, null));