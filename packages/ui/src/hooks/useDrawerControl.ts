import { dialogActions } from '@do-ob/ui/reducer';
import { useDispatch } from './useDispatch';
import { useSelector } from './useSelector';

export function useDrawerControl(name: string) {
  const id = `drawer/${name}`;
  const drawer = useSelector((state) => state.dialog.items[id]);
  const dispatch = useDispatch();

  const onPress = () => {
    if (!drawer) {
      return;
    }
    if (drawer?.open) {
      console.log('closing');
      dispatch(dialogActions.close(id));
    } else {
      console.log('opening');
      dispatch(dialogActions.open(id));
    }
  };

  return drawer ? {
    onPress
  } : {};
};
