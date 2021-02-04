import PropTypes from 'prop-types';

export default function Page({ children, title }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>I am the page component</h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
