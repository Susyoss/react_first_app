import styles from './PageSubtitle.module.scss';

const PageSubtitle = props => {
  return (
    <p className={(styles.subtitle, props.addMargin && styles.addMargin)}>{props.children}</p>
  );
}

export default PageSubtitle;