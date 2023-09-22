const YEAR = new Date().getFullYear()

export default {
  footer: (
    <footer>
      <small>
        <span>
          <time>{YEAR}</time> © Luca Müller
        </span>
        <button type="button" data-cc="c-settings">Manage cookie settings</button>
        <a href="/feed.xml">RSS</a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        small {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </footer>
  ),
}
