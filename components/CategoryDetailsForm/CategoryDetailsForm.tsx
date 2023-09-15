import styles from './CategoryDetailsForm.module.scss';

/* eslint-disable-next-line */
export interface CategoryDetailsFormProps {}

export function CategoryDetailsForm(props: CategoryDetailsFormProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CategoryDetailsForm!</h1>
    </div>
  );
}

export default CategoryDetailsForm;
