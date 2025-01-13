import { reactive as a } from "vue";
let d = a({}), o = a({}), l = a({});
const p = () => ({ request: d, model: o, params: l }), q = () => o, y = async (e) => {
  var t, n;
  if (d = e.to.query, !((t = e.to.meta) != null && t.controller)) throw new Error("Controller not defined");
  if (!((n = e.to.meta) != null && n.controller.length)) throw new Error("Controller/Method not defined");
  e.to.params, l = u(e.to.params), o = new e.to.meta.controller[0]();
  const r = e.to.meta.controller[1];
  await o[r](l.id), console.log(o.model.comments);
};
function u(e) {
  return Object.keys(e).forEach((r) => {
    e[r] ? e[r] = Number(e[r]) : e[r] === "" && (e[r] = null);
  }), e;
}
const m = (e, r, t) => {
  const n = r[t];
  return n ? (...s) => {
    m(e, r, t + 1), n({ ...e });
  } : e.next;
}, f = (e, r, t) => {
  var n;
  if ((n = r.meta) != null && n.middleware) {
    const s = Array.isArray(r.meta.middleware) ? r.meta.middleware : [r.meta.middleware], c = {
      from: e,
      to: r,
      // next,
      router: t
    }, i = m(c, s, 1);
    return s[0]({ ...c, next: i });
  }
}, h = {
  install: (e, r) => {
    r.beforeEach((t, n) => {
      f(n, t, r);
    });
  }
};
function M() {
  return (e) => {
    var r;
    return (r = e.params) != null && r.id && (e.params.id = parseInt(e.params.id)), e.params;
  };
}
const I = (e) => (r) => {
  for (const t in e.params)
    r.params[t] = parseInt(r.params[t]);
  for (const t in e.query)
    r.query[t] = parseInt(r.query[t]);
  return { ...r.params, query: r.query };
};
export {
  h as MiddlewarePlugin,
  M as castId,
  I as castRoute,
  y as requestsInjection,
  p as useController,
  q as useModel
};
//# sourceMappingURL=vue-middleware-plugin.js.map
