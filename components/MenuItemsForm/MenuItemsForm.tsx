import styles from './MenuItemsForm.module.scss';

/* eslint-disable-next-line */
export interface MenuItemsFormProps {}

export function MenuItemsForm(props: MenuItemsFormProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MenuItemsForm!</h1>
    </div>
  );
}

export default MenuItemsForm;
