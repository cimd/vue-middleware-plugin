import { reactive as c } from "vue";
let m = c({}), n = c({}), s = c({});
const h = () => ({ request: m, model: n, params: s }), M = () => n, p = async (e) => {
  var o, t;
  if (m = e.to.query, !((o = e.to.meta) != null && o.controller)) throw new Error("Controller not defined");
  if (!((t = e.to.meta) != null && t.controller.length)) throw new Error("Controller/Method not defined");
  e.to.params, s = i(e.to.params), n = new e.to.meta.controller[0]();
  const r = e.to.meta.controller[1];
  await n[r](s.id), console.log(n.model.comments);
};
function i(e) {
  return Object.keys(e).forEach((r) => {
    e[r] ? e[r] = Number(e[r]) : e[r] === "" && (e[r] = null);
  }), e;
}
const u = (e, r, o) => {
  const t = r[o];
  return t ? (...l) => {
    u(e, r, o + 1), t({ ...e });
  } : e.next;
}, f = (e, r, o) => {
  var t;
  if ((t = r.meta) != null && t.middleware) {
    const l = Array.isArray(r.meta.middleware) ? r.meta.middleware : [r.meta.middleware], d = {
      from: e,
      to: r,
      // next,
      router: o
    }, a = u(d, l, 1);
    return l[0]({ ...d, next: a });
  }
}, b = {
  install: (e, r) => {
    r.beforeEach((o, t) => {
      f(t, o, r);
    });
  }
};
function q(e) {
  return function(r) {
    return e ? { ...r.params, id: parseInt(e) } : r.params;
  };
}
export {
  b as MiddlewarePlugin,
  q as castId,
  p as requestsInjection,
  h as useController,
  M as useModel
};
//# sourceMappingURL=vue-middleware-plugin.js.map
