import Image from "next/image";
import styles from "./page.module.css";

const Profile = async () => {
  let profile;
  try {
    const res = await fetch("https://dummyjson.com/users/1");
    profile = await res.json();

    if (profile.message) {
      throw Error(profile.message);
    }
  } catch (error) {
    throw Error("Failed to load profile: " + error.message);
  }

  const fullAddress = `${profile.address.address}, ${profile.address.city}, ${profile.address.state}, ${profile.address.postalCode}, ${profile.address.country}`;
  const companyAddress = `${profile.company.address.address}, ${profile.company.address.city}`;

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.header}>
          <Image
            src={profile.image}
            alt="Profile Image"
            width={120}
            height={120}
            className={styles.avatar}
          />
          <div>
            <h2>{profile.firstName} {profile.lastName}</h2>
            <p>{profile.company.title}</p>
          </div>
        </div>

        <div className={styles.infoGrid}>
          <div><strong>Maiden Name:</strong> {profile.maidenName}</div>
          <div><strong>Phone:</strong> {profile.phone}</div>
          <div><strong>Email:</strong> {profile.email}</div>
          <div><strong>Date of Birth:</strong> {profile.birthDate}</div>
          <div><strong>Address:</strong> {fullAddress}</div>
          <div><strong>University:</strong> {profile.university}</div>
          <div><strong>Company:</strong> {profile.company.name}</div>
          <div><strong>Company Address:</strong> {companyAddress}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
