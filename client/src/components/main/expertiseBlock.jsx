export const BlockExpertise = ({ logo, title, parag }) => {
  return (
    <div className="composant-section-block">
      <div className="section-header">
        {typeof logo === 'string' ? <img src={logo} alt={`${title} logo`} /> : logo}
        <h5 className="title-header-expertise">{title}</h5>
      </div>
      <div className="section-text">
        <p className="text-section-block">{parag}</p>
      </div>
    </div>
  );
};

export default BlockExpertise;
