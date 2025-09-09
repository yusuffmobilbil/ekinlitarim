export default function GoogleMap() {
  return (
    <>
      <section className="google-map">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1EhOkKW7PpSi2ylXsBvvLo7At5jW86Ew&ehbc=2E312F"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
