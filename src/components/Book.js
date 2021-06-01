import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../actions';

const Book = ({ book, delete: handleDelete }) => (
  <table className="table">
    <tr>
      <td className="col-3">{book.id}</td>
      <td className="col-3">{book.title}</td>
      <td className="col-3">{book.category}</td>
      <td className="col-3">
        <button type="button" onClick={() => handleDelete(book)}>
          <i className="fa fa-trash" />
        </button>
      </td>
    </tr>
  </table>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  delete: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  delete: (book) => dispatch(deleteBook(book)),
});

export default connect(null, mapDispatchToProps)(Book);
