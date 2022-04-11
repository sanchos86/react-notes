const EmptyTableRow = ({
  colSpan,
  text = 'Nothing found',
}) => (
  <tr className={'text-center'}>
    <td colSpan={colSpan}>{text}</td>
  </tr>
);

export default EmptyTableRow;
