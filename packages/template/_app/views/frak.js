export default function frameworks(request, response) {
  return `
    <style>
    * {
      font-family: sans-serif;
      text-align: center;
    }
    .logo {
      margin-top: 200px;
    }
    .logo img {
      width: 600px;
    }
    </style>
    <div class="logo">
      <img src="/static/frak.png" alt="Frak logo" />
      <h1>Welcome to the Frak Framework</h1>
      <p>Edit this component in <code>views/frak.js</code> to add your logic.</p>
    </div>
  `;
}
