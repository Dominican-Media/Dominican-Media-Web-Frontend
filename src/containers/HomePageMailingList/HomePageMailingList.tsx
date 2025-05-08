import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import classes from "./HomePageMailingList.module.css";

const HomePageMailingList = () => {
  return (
    <section className={classes.container}>
      <h2>Subscribe to our mailing list</h2>

      <div className={classes.mailingListContainer}>
        <p>
          Be the first to receive information about our upcoming projects,
          special screenings, and exclusive behind-the-scenes content. From new
          show launches to community events, our newsletter keeps you connected
          to everything happening at Dominican Media. Join our growing community
          and journey with us as we share stories that inspire and uplift.
        </p>

        <form>
          <Input label="Name" />
          <Input label="Email Address" type="email" />
          <Button type="secondary">Submit</Button>
        </form>
      </div>
    </section>
  );
};

export default HomePageMailingList;
