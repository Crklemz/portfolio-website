import styles from "@/styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>Contact Me</h1>
      <form>
        {/* Label and Input Fields */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Name</label>
          <input type="text" className={styles.input} />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Email</label>
          <input type="email" className={styles.input} />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Message</label>
          <textarea className={styles.textarea} rows={4}></textarea>
        </div>

        {/* Use the global `.btn-primary` class */}
        <button className="btn-primary w-full mt-4">
          Send Message
        </button>
      </form>
    </div>
  );
}
