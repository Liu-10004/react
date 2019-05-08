webpackJsonp([0xfb8086e1a652],{829:function(a,t){a.exports={data:{markdownRemark:{html:'<p>Today we’re releasing React 16.6 with a few new convenient features. A form of PureComponent/shouldComponentUpdate for function components, a way to do code splitting using Suspense and an easier way to consume Context from class components.</p>\n<p>Check out the full <a href="#changelog">changelog</a> below.</p>\n<h2 id="reactmemo"><a href="#reactmemo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a href="/docs/react-api.html#reactmemo"><code class="gatsby-code-text">React.memo</code></a></h2>\n<p>Class components can bail out from rendering when their input props are the same using <a href="/docs/react-api.html#reactpurecomponent"><code class="gatsby-code-text">PureComponent</code></a> or <a href="/docs/react-component.html#shouldcomponentupdate"><code class="gatsby-code-text">shouldComponentUpdate</code></a>. Now you can do the same with function components by wrapping them in <a href="/docs/react-api.html#reactmemo"><code class="gatsby-code-text">React.memo</code></a>.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> MyComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">memo</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">/* only rerenders if props change */</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2 id="reactlazy-code-splitting-with-suspense"><a href="#reactlazy-code-splitting-with-suspense" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a href="/docs/code-splitting.html#reactlazy"><code class="gatsby-code-text">React.lazy</code></a>: Code-Splitting with <code class="gatsby-code-text">Suspense</code></h2>\n<p>You may have seen <a href="/blog/2018/03/01/sneak-peek-beyond-react-16.html">Dan’s talk about React Suspense at JSConf Iceland</a>. Now you can use the Suspense component to do <a href="/docs/code-splitting.html#reactlazy">code-splitting</a> by wrapping a dynamic import in a call to <code class="gatsby-code-text">React.lazy()</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>lazy<span class="token punctuation">,</span> Suspense<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> OtherComponent <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">\'./OtherComponent\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Suspense</span> <span class="token attr-name">fallback</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Loading<span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>OtherComponent</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Suspense</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>The Suspense component will also allow library authors to start building data fetching with Suspense support in the future.</p>\n<blockquote>\n<p>Note: This feature is not yet available for server-side rendering. Suspense support will be added in a later release.</p>\n</blockquote>\n<h2 id="static-contexttype"><a href="#static-contexttype" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a href="/docs/context.html#classcontexttype"><code class="gatsby-code-text">static contextType</code></a></h2>\n<p>In <a href="/blog/2018/03/29/react-v-16-3.html">React 16.3</a> we introduced the official Context API as a replacement to the previous <a href="/docs/legacy-context.html">Legacy Context</a> API.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> MyContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>We’ve heard feedback that adopting the new render prop API can be difficult in class components. So we’ve add a convenience API to <a href="/docs/context.html#classcontexttype">consume a context value from within a class component</a>.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token keyword">static</span> contextType <span class="token operator">=</span> MyContext<span class="token punctuation">;</span>\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">;</span>\n    <span class="token comment">/* perform a side-effect at mount using the value of MyContext */</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">componentDidUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">;</span>\n    <span class="token comment">/* ... */</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">;</span>\n    <span class="token comment">/* ... */</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">;</span>\n    <span class="token comment">/* render something based on the value of MyContext */</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2 id="static-getderivedstatefromerror"><a href="#static-getderivedstatefromerror" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a href="/docs/react-component.html#static-getderivedstatefromerror"><code class="gatsby-code-text">static getDerivedStateFromError()</code></a></h2>\n<p>React 16 introduced <a href="/blog/2017/07/26/error-handling-in-react-16.html">Error Boundaries</a> for handling errors thrown in React renders. We already had the <code class="gatsby-code-text">componentDidCatch</code> lifecycle method which gets fired after an error has already happened. It’s great for logging errors to the server. It also lets you show a different UI to the user by calling <code class="gatsby-code-text">setState</code>.</p>\n<p>Before that is fired, we render <code class="gatsby-code-text">null</code> in place of the tree that threw an error. This sometimes breaks parent components that don’t expect their refs to be empty. It also doesn’t work to recover from errors on the server since the <code class="gatsby-code-text">Did</code> lifecycle methods don’t fire during server-side rendering.</p>\n<p>We’re adding another error method that lets you render the fallback UI before the render completes. See the docs for <a href="/docs/react-component.html#static-getderivedstatefromerror"><code class="gatsby-code-text">getDerivedStateFromError()</code></a>.</p>\n<blockquote>\n<p>Note: <code class="gatsby-code-text">getDerivedStateFromError()</code> is not yet available for server-side rendering. It is designed to work with server-side rendering in a future release. We’re releasing it early so that you can start preparing to use it.</p>\n</blockquote>\n<h2 id="deprecations-in-strictmode"><a href="#deprecations-in-strictmode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Deprecations in StrictMode</h2>\n<p>In <a href="/blog/2018/03/29/react-v-16-3.html#strictmode-component">16.3</a> we introduced the <a href="/docs/strict-mode.html"><code class="gatsby-code-text">StrictMode</code></a> component. It lets you opt-in to early warnings for patterns that might cause problems in the future.</p>\n<p>We’ve added two more APIs to the list of deprecated APIs in <code class="gatsby-code-text">StrictMode</code>. If you don’t use <code class="gatsby-code-text">StrictMode</code> you don’t have to worry; these warning won’t fire for you.</p>\n<ul>\n<li><strong>ReactDOM.findDOMNode()</strong> - This API is often misunderstood and most uses of it are unnecessary. It can also be surprisingly slow in React 16. <a href="/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage">See the docs</a> for possible upgrade paths.</li>\n<li><strong>Legacy Context</strong> using contextTypes and getChildContext - Legacy context makes React slightly slower and bigger than it needs to be. That’s why we strongly want to encourage upgrading to the <a href="/docs/context.html">new context API</a>. Hopefully the addition of the <a href="/docs/context.html#classcontexttype"><code class="gatsby-code-text">contextType</code></a> API makes this a bit easier.</li>\n</ul>\n<p>If you’re having trouble upgrading, we’d like to hear your feedback.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>React v16.6.0 is available on the npm registry.</p>\n<p>To install React 16 with Yarn, run:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code class="gatsby-code-bash">yarn add react@^16.6.0 react-dom@^16.6.0\n</code></pre>\n      </div>\n<p>To install React 16 with npm, run:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code class="gatsby-code-bash"><span class="token function">npm</span> <span class="token function">install</span> --save react@^16.6.0 react-dom@^16.6.0\n</code></pre>\n      </div>\n<p>We also provide UMD builds of React via a CDN:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">crossorigin</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://unpkg.com/react@16/umd/react.production.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">crossorigin</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://unpkg.com/react-dom@16/umd/react-dom.production.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>Refer to the documentation for <a href="/docs/installation.html">detailed installation instructions</a>.</p>\n<h2 id="changelog"><a href="#changelog" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changelog</h2>\n<h3 id="react"><a href="#react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React</h3>\n<ul>\n<li>Add <code class="gatsby-code-text">React.memo()</code> as an alternative to <code class="gatsby-code-text">PureComponent</code> for functions. (<a href="https://github.com/acdlite">@acdlite</a> in <a href="https://github.com/facebook/react/pull/13748">#13748</a>)</li>\n<li>Add <code class="gatsby-code-text">React.lazy()</code> for code splitting components. (<a href="https://github.com/acdlite">@acdlite</a> in <a href="https://github.com/facebook/react/pull/13885">#13885</a>)</li>\n<li><code class="gatsby-code-text">React.StrictMode</code> now warns about legacy context API. (<a href="https://github.com/bvaughn">@bvaughn</a> in <a href="https://github.com/facebook/react/pull/13760">#13760</a>)</li>\n<li><code class="gatsby-code-text">React.StrictMode</code> now warns about <code class="gatsby-code-text">findDOMNode</code>. (<a href="https://github.com/sebmarkbage">@sebmarkbage</a> in <a href="https://github.com/facebook/react/pull/13841">#13841</a>)</li>\n<li>Rename <code class="gatsby-code-text">unstable_AsyncMode</code> to <code class="gatsby-code-text">unstable_ConcurrentMode</code>. (<a href="https://github.com/trueadm">@trueadm</a> in <a href="https://github.com/facebook/react/pull/13732">#13732</a>)</li>\n<li>Rename <code class="gatsby-code-text">unstable_Placeholder</code> to <code class="gatsby-code-text">Suspense</code>, and <code class="gatsby-code-text">delayMs</code> to <code class="gatsby-code-text">maxDuration</code>. (<a href="https://github.com/gaearon">@gaearon</a> in <a href="https://github.com/facebook/react/pull/13799">#13799</a> and <a href="https://github.com/sebmarkbage">@sebmarkbage</a> in <a href="https://github.com/facebook/react/pull/13922">#13922</a>)</li>\n</ul>\n<h3 id="react-dom"><a href="#react-dom" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React DOM</h3>\n<ul>\n<li>Add <code class="gatsby-code-text">contextType</code> as a more ergonomic way to subscribe to context from a class. (<a href="https://github.com/bvaughn">@bvaughn</a> in <a href="https://github.com/facebook/react/pull/13728">#13728</a>)</li>\n<li>Add <code class="gatsby-code-text">getDerivedStateFromError</code> lifecycle method for catching errors in a future asynchronous server-side renderer. (<a href="https://github.com/bvaughn">@bvaughn</a> in <a href="https://github.com/facebook/react/pull/13746">#13746</a>)</li>\n<li>Warn when <code class="gatsby-code-text">&lt;Context&gt;</code> is used instead of <code class="gatsby-code-text">&lt;Context.Consumer&gt;</code>. (<a href="https://github.com/trueadm">@trueadm</a> in <a href="https://github.com/facebook/react/pull/13829">#13829</a>)</li>\n<li>Fix gray overlay on iOS Safari. (<a href="https://github.com/philipp-spiess">@philipp-spiess</a> in <a href="https://github.com/facebook/react/pull/13778">#13778</a>)</li>\n<li>Fix a bug caused by overwriting <code class="gatsby-code-text">window.event</code> in development. (<a href="https://github.com/sergei-startsev">@sergei-startsev</a> in <a href="https://github.com/facebook/react/pull/13697">#13697</a>)</li>\n</ul>\n<h3 id="react-dom-server"><a href="#react-dom-server" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React DOM Server</h3>\n<ul>\n<li>Add support for <code class="gatsby-code-text">React.memo()</code>. (<a href="https://github.com/alexmckenley">@alexmckenley</a> in <a href="https://github.com/facebook/react/pull/13855">#13855</a>)</li>\n<li>Add support for <code class="gatsby-code-text">contextType</code>. (<a href="https://github.com/alexmckenley">@alexmckenley</a> and <a href="https://github.com/sebmarkbage">@sebmarkbage</a> in <a href="https://github.com/facebook/react/pull/13889">#13889</a>)</li>\n</ul>\n<h3 id="scheduler-experimental"><a href="#scheduler-experimental" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Scheduler (Experimental)</h3>\n<ul>\n<li>Rename the package to <code class="gatsby-code-text">scheduler</code>. (<a href="https://github.com/gaearon">@gaearon</a> in <a href="https://github.com/facebook/react/pull/13683">#13683</a>)</li>\n<li>Support priority levels, continuations, and wrapped callbacks. (<a href="https://github.com/acdlite">@acdlite</a> in <a href="https://github.com/facebook/react/pull/13720">#13720</a> and <a href="https://github.com/facebook/react/pull/13842">#13842</a>)</li>\n<li>Improve the fallback mechanism in non-DOM environments. (<a href="https://github.com/acdlite">@acdlite</a> in <a href="https://github.com/facebook/react/pull/13740">#13740</a>)</li>\n<li>Schedule <code class="gatsby-code-text">requestAnimationFrame</code> earlier. (<a href="https://github.com/acdlite">@acdlite</a> in <a href="https://github.com/facebook/react/pull/13785">#13785</a>)</li>\n<li>Fix the DOM detection to be more thorough. (<a href="https://github.com/trueadm">@trueadm</a> in <a href="https://github.com/facebook/react/pull/13731">#13731</a>)</li>\n<li>Fix bugs with interaction tracing. (<a href="https://github.com/bvaughn">@bvaughn</a> in <a href="https://github.com/facebook/react/pull/13590">#13590</a>)</li>\n<li>Add the <code class="gatsby-code-text">envify</code> transform to the package. (<a href="https://github.com/mridgway">@mridgway</a> in <a href="https://github.com/facebook/react/pull/13766">#13766</a>)</li>\n</ul>',excerpt:"Today we’re releasing React 16.6 with a few new convenient features. A form of PureComponent/shouldComponentUpdate for function components, a way to do code splitting using Suspense and an easier way to consume Context from class components. Check out the full  changelog  below. Class components can bail out from rendering when their input props are the same using   or  . Now you can do the same with function components by wrapping them in  . : Code-Splitting with  You may have seen  Dan’s talk…",frontmatter:{title:"React v16.6.0: lazy, memo and contextType",next:null,prev:null,author:[{frontmatter:{name:"Sebastian Markbåge",url:"https://twitter.com/sebmarkbage"}}]},fields:{date:"October 22, 2018",path:"blog/2018-10-23-react-v-16-6.md",slug:"/blog/2018/10/23/react-v-16-6.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.7: No, This Is Not the One With Hooks"},fields:{slug:"/blog/2018/12/19/react-v-16-7.html"}}},{node:{frontmatter:{title:"React 16.x Roadmap"},fields:{slug:"/blog/2018/11/27/react-16-roadmap.html"}}},{node:{frontmatter:{title:"React Conf recap: Hooks, Suspense, and Concurrent Rendering"},fields:{slug:"/blog/2018/11/13/react-conf-recap.html"}}},{node:{frontmatter:{title:"React v16.6.0: lazy, memo and contextType"},fields:{slug:"/blog/2018/10/23/react-v-16-6.html"}}},{node:{frontmatter:{title:"Create React App 2.0: Babel 7, Sass, and More"},fields:{slug:"/blog/2018/10/01/create-react-app-v2.html"}}},{node:{frontmatter:{title:"Introducing the React Profiler"},fields:{slug:"/blog/2018/09/10/introducing-the-react-profiler.html"}}},{node:{frontmatter:{title:"React v16.4.2: Server-side vulnerability fix"},fields:{slug:"/blog/2018/08/01/react-v-16-4-2.html"}}},{node:{frontmatter:{title:"You Probably Don't Need Derived State"},fields:{slug:"/blog/2018/06/07/you-probably-dont-need-derived-state.html"}}},{node:{frontmatter:{title:"React v16.4.0: Pointer Events"},fields:{slug:"/blog/2018/05/23/react-v-16-4.html"}}},{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}}]}},pathContext:{slug:"/blog/2018/10/23/react-v-16-6.html"}}}});
//# sourceMappingURL=path---blog-2018-10-23-react-v-16-6-html-b30e5cbf9c8024b7c654.js.map