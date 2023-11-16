import React, { FC } from 'react';

interface Props {
  _onClick: () => void;
}

const UpdateButton: FC<Props> = ({ _onClick }) => {
  return (
    <td>
      <button
        onClick={_onClick}
        className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
      >
        Edit
      </button>
    </td>
  );
};

export default UpdateButton;
