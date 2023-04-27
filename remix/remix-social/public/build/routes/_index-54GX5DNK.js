import {
  __commonJS,
  __toESM,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-ANWLSTK2.js";

// empty-module:~/service/post.server
var require_post = __commonJS({
  "empty-module:~/service/post.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/_index.tsx
var import_post = __toESM(require_post());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: "New Remix App" }];
};
function Index() {
  const { posts } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: post.title }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: post.body }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this)
  ] }, post.id, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 26,
    columnNumber: 11
  }, this)) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-54GX5DNK.js.map
