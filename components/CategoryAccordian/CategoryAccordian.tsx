import styles from './CategoryAccordian.module.scss';

/* eslint-disable-next-line */
export interface CategoryAccordianProps {}

export function CategoryAccordian(props: CategoryAccordianProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CategoryAccordian!</h1>
    </div>
  );
}

export default CategoryAccordian;
