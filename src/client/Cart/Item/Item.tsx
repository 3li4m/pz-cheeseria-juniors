import Button from '@material-ui/core/Button';
import { useState } from 'react';
// Types
import { CartItemType } from '../../App';
// Styles
import { Wrapper } from './Item.styles';

// Dialog
import { DialogContentText } from '@material-ui/core';
import {Dialog, DialogTitle, DialogContent, DialogActions} from '@material-ui/core';


type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {

  const [dialog, setDialog] = useState(false);

  const openDialog = () => {
    setDialog(true);
  }

  const closeDialog = () => {
    setDialog(false);
  }

  return(
    <Wrapper>
      <img src={item.image} alt={item.title} onClick={openDialog}/>
      <div>
        <h3>{item.title}</h3>
        <h3>${item.price}</h3>
      </div>
      <Button
        onClick={() => handleAddToCart(item)}
        data-cy={`add-to-cart-${item.id}`}>Add to cart
      </Button>

      <Dialog open={dialog} onClose={closeDialog}>
        <DialogTitle>{item.title}</DialogTitle>
        <DialogContent>
            <DialogContentText>{item.description}</DialogContentText>
            <DialogContentText>${item.price}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Close</Button>
        </DialogActions>
      </Dialog>

    </Wrapper>
  );
}

export default Item;
