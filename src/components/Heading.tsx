import styles from './Heading.module.css'

type HeadingProps = {
  children: React.ReactNode /* tudo que o react pode renderizar */
}

export function Heading(props: HeadingProps) {
  const { children } = props /* destructuring */

  return <h1 className={styles.heading}>{children}</h1>
}
