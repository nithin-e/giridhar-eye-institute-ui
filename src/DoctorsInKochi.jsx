import React, { useMemo, useState } from 'react';
import './DoctorsInKochi.css';

const DoctorsInKochi = () => {
  const [activeBranch, setActiveBranch] = useState('all');
  const [cataractLoc, setCataractLoc] = useState('all');
  const [glaucomaLoc, setGlaucomaLoc] = useState('all');
  const [laserLoc, setLaserLoc] = useState('all');
  const [paedLoc, setPaedLoc] = useState('all');
  const [orbitLoc, setOrbitLoc] = useState('all');
  const [anaLoc, setAnaLoc] = useState('all');
  const [physLoc, setPhysLoc] = useState('all');

  const doctors = useMemo(
    () => ({
      all: [
        {
          id: 'giridhar',
          name: 'Dr Giridhar A',
          title: 'Medical Director & Chief\nMentor',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/11/giridhar.jpg',
          href: '#',
        },
        {
          id: 'mahesh',
          name: 'Dr Mahesh G',
          title: 'Senior Consultant & HOD',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/10/Dr-Saikumar-e1731139512712.jpg',
          href: '#',
        },
        {
          id: 'thomas',
          name: 'Dr Thomas\nKuriakose',
          title: 'Senior Consultant & Director\nOf Academics',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/11/Dr-Thomas.jpg',
          href: '#',
        },
        {
          id: 'jyoti',
          name: 'Dr Jyoti Prakash\nVyas',
          title: 'Consultant - Vitreo Retina',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/11/Dr-Thomas.jpg',
          href: '#',
        },
        {
          id: 'extra-1',
          name: 'Dr. Retina\nConsultant A',
          title: 'Consultant - Vitreo Retina',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/11/giridhar.jpg',
          href: '#',
        },
        {
          id: 'extra-2',
          name: 'Dr. Retina\nConsultant B',
          title: 'Consultant - Vitreo Retina',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/10/Dr-Saikumar-e1731139512712.jpg',
          href: '#',
        },
        {
          id: 'extra-3',
          name: 'Dr. Retina\nConsultant C',
          title: 'Consultant - Vitreo Retina',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/11/Dr-Thomas.jpg',
          href: '#',
        },
        {
          id: 'extra-4',
          name: 'Dr. Retina\nConsultant D',
          title: 'Consultant - Vitreo Retina',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/11/Dr-Thomas.jpg',
          href: '#',
        },
      ],
      kadavanthra: [
        {
          id: 'kiran',
          name: 'Dr. Kiran Chandran',
          title: 'Consultant - Medical Retina',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/10/Dr-Saikumar-e1731139512712.jpg',
          href: '#',
        },
        {
          id: 'vishakh',
          name: 'Dr. Vishakh Kumar',
          title: 'Consultant - Vitreo Retina',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/11/Dr-Thomas.jpg',
          href: '#',
        },
        {
          id: 'kad-extra-1',
          name: 'Dr. Kadavanthra\nConsultant E',
          title: 'Consultant - Vitreo Retina',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/11/giridhar.jpg',
          href: '#',
        },
        {
          id: 'kad-extra-2',
          name: 'Dr. Kadavanthra\nConsultant F',
          title: 'Consultant - Medical Retina',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/10/Dr-Saikumar-e1731139512712.jpg',
          href: '#',
        },
      ],
    }),
    [],
  );

  const list = activeBranch === 'all' ? doctors.all : doctors.kadavanthra;

  const cataractDoctors = useMemo(
    () => ({
      all: [
        {
          id: 'c1',
          name: 'Dr. S J Saikumar',
          title: 'Medical Superintendent & Head',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/11/giridhar.jpg',
          href: '#',
        },
        {
          id: 'c2',
          name: 'Dr. Sandhya N',
          title: 'Center Head & Sr Consultant - Cataract',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/10/Dr-Saikumar-e1731139512712.jpg',
          href: '#',
        },
        {
          id: 'c3',
          name: 'Dr. Sara Jacob',
          title: 'Senior Consultant - Cataract',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/11/Dr-Thomas.jpg',
          href: '#',
        },
        {
          id: 'c4',
          name: 'Dr. Kalaimathi G S',
          title: 'Consultant - Cataract Services',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/11/Dr-Thomas.jpg',
          href: '#',
        },
        {
          id: 'c5',
          name: 'Dr. Cataract Specialist A',
          title: 'Consultant - Cataract Services',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/10/Dr-Saikumar-e1731139512712.jpg',
          href: '#',
        },
        {
          id: 'c6',
          name: 'Dr. Cataract Specialist B',
          title: 'Senior Consultant - Cataract',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/11/Dr-Thomas.jpg',
          href: '#',
        },
        {
          id: 'c7',
          name: 'Dr. Cataract Specialist C',
          title: 'Consultant - Cataract Services',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/11/giridhar.jpg',
          href: '#',
        },
        {
          id: 'c8',
          name: 'Dr. Cataract Specialist D',
          title: 'Consultant - Cataract Services',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/10/Dr-Saikumar-e1731139512712.jpg',
          href: '#',
        },
      ],
      edappally: [
        {
          id: 'c5',
          name: 'Dr. Cataract Specialist A',
          title: 'Consultant - Cataract Services',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/11/giridhar.jpg',
          href: '#',
        },
      ],
      kadavanthra: [
        {
          id: 'c6',
          name: 'Dr. Cataract Specialist B',
          title: 'Consultant - Cataract Services',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/10/Dr-Saikumar-e1731139512712.jpg',
          href: '#',
        },
      ],
      thripunithura: [
        {
          id: 'c7',
          name: 'Dr. Cataract Specialist C',
          title: 'Consultant - Cataract Services',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/11/Dr-Thomas.jpg',
          href: '#',
        },
      ],
    }),
    [],
  );

  const cataractList =
    cataractLoc === 'all' ? cataractDoctors.all : cataractDoctors[cataractLoc] ?? cataractDoctors.all;

  const glaucomaDoctors = useMemo(
    () => ({
      all: [
        {
          id: 'gl1',
          name: 'Dr. Manju Anup',
          title: 'Consultant - Glaucoma',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/10/Dr-Saikumar-e1731139512712.jpg',
          href: '#',
        },
      ],
      kadavanthra: [
        {
          id: 'gl1',
          name: 'Dr. Manju Anup',
          title: 'Consultant - Glaucoma',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/10/Dr-Saikumar-e1731139512712.jpg',
          href: '#',
        },
      ],
    }),
    [],
  );

  const glaucomaList =
    glaucomaLoc === 'all' ? glaucomaDoctors.all : glaucomaDoctors[glaucomaLoc] ?? glaucomaDoctors.all;

  const laserDoctors = useMemo(
    () => ({
      all: [
        {
          id: 'l1',
          name: 'Dr. Vinay S Pillai',
          title: 'Senior Consultant & Head, Cornea & Refractive Surgery',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/10/Dr-Saikumar-e1731139512712.jpg',
          href: '#',
        },
        {
          id: 'l2',
          name: 'Dr. Sugaranjini G',
          title: 'Consultant-Cornea & Refractive Services',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/11/Dr-Thomas.jpg',
          href: '#',
        },
        {
          id: 'l3',
          name: 'Dr. Divya Giridhar',
          title: 'Consultant-Cornea & Refractive Services',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/11/giridhar.jpg',
          href: '#',
        },
      ],
      kadavanthra: [
        {
          id: 'l1',
          name: 'Dr. Vinay S Pillai',
          title: 'Senior Consultant & Head, Cornea & Refractive Surgery',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/10/Dr-Saikumar-e1731139512712.jpg',
          href: '#',
        },
        {
          id: 'l2',
          name: 'Dr. Sugaranjini G',
          title: 'Consultant-Cornea & Refractive Services',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/11/Dr-Thomas.jpg',
          href: '#',
        },
        {
          id: 'l3',
          name: 'Dr. Divya Giridhar',
          title: 'Consultant-Cornea & Refractive Services',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/11/giridhar.jpg',
          href: '#',
        },
      ],
    }),
    [],
  );

  const laserList = laserLoc === 'all' ? laserDoctors.all : laserDoctors.kadavanthra ?? laserDoctors.all;

  const paediatricDoctors = useMemo(
    () => ({
      all: [
        {
          id: 'p1',
          name: 'Dr. Neena R',
          title: 'Head-Department of Paediatric Ophthalmology, Strabismus and Neurophthalmology',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/11/Dr-Thomas.jpg',
          href: '#',
        },
        {
          id: 'p2',
          name: 'Dr. Ranjini H',
          title: 'Consultant Paediatric Ophthalmology & Strabismus',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/10/Dr-Saikumar-e1731139512712.jpg',
          href: '#',
        },
        {
          id: 'p3',
          name: 'Dr. Ranjini H',
          title: 'Consultant Paediatric Ophthalmology & Strabismus',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/11/Dr-Thomas.jpg',
          href: '#',
        },
      ],
      kadavanthra: [
        {
          id: 'p2',
          name: 'Dr. Ranjini H',
          title: 'Consultant Paediatric Ophthalmology & Strabismus',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/10/Dr-Saikumar-e1731139512712.jpg',
          href: '#',
        },
      ],
    }),
    [],
  );

  const paedList = paedLoc === 'all' ? paediatricDoctors.all : paediatricDoctors[paedLoc] ?? paediatricDoctors.all;

  const orbitDoctors = useMemo(
    () => ({
      all: [
        {
          id: 'o1',
          name: 'Dr. Marian Pauly',
          title: 'Senior Consultant & HOD, Orbit, Oculoplasty & Ocular Oncology',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/11/Dr-Thomas.jpg',
          href: '#',
        },
        {
          id: 'o2',
          name: 'Dr. Shebin Salim',
          title: 'Consultant Orbit & Oculoplasty',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/10/Dr-Saikumar-e1731139512712.jpg',
          href: '#',
        },
      ],
      kadavanthra: [
        {
          id: 'o1',
          name: 'Dr. Marian Pauly',
          title: 'Senior Consultant & HOD, Orbit, Oculoplasty & Ocular Oncology',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/11/Dr-Thomas.jpg',
          href: '#',
        },
        {
          id: 'o2',
          name: 'Dr. Shebin Salim',
          title: 'Consultant Orbit & Oculoplasty',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/10/Dr-Saikumar-e1731139512712.jpg',
          href: '#',
        },
      ],
    }),
    [],
  );

  const orbitList =
    orbitLoc === 'all' ? orbitDoctors.all : orbitDoctors[orbitLoc] ?? orbitDoctors.all;

  const anaDoctors = useMemo(
    () => ({
      all: [
        {
          id: 'a1',
          name: 'Dr. Pushpa Susan Isaac',
          title: 'Consultant & Head - Anaesthesia',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/11/Dr-Thomas.jpg',
          href: '#',
        },
        {
          id: 'a2',
          name: 'Dr. Sumana Moorthy',
          title: 'Consultant - Anaesthesia',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/10/Dr-Saikumar-e1731139512712.jpg',
          href: '#',
        },
      ],
      kadavanthra: [
        {
          id: 'a1',
          name: 'Dr. Pushpa Susan Isaac',
          title: 'Consultant & Head - Anaesthesia',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/11/Dr-Thomas.jpg',
          href: '#',
        },
        {
          id: 'a2',
          name: 'Dr. Sumana Moorthy',
          title: 'Consultant - Anaesthesia',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/10/Dr-Saikumar-e1731139512712.jpg',
          href: '#',
        },
      ],
    }),
    [],
  );

  const anaList = anaLoc === 'all' ? anaDoctors.all : anaDoctors[anaLoc] ?? anaDoctors.all;

  const physicianDoctors = useMemo(
    () => ({
      all: [
        {
          id: 'ph1',
          name: 'Dr. Monica V M',
          title: 'Physician',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/11/Dr-Thomas.jpg',
          href: '#',
        },
        {
          id: 'ph2',
          name: 'Dr. Radha Unnikrishnan',
          title: 'Physician',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/10/Dr-Saikumar-e1731139512712.jpg',
          href: '#',
        },
        {
          id: 'ph3',
          name: 'Dr. Pradeep Kumar',
          title: 'Physician',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/11/giridhar.jpg',
          href: '#',
        },
        {
          id: 'ph4',
          name: 'Dr. Joan Karen Meyn',
          title: 'Consultant Physician',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/10/Dr-Saikumar-e1731139512712.jpg',
          href: '#',
        },
      ],
      edappally: [
        {
          id: 'ph1',
          name: 'Dr. Monica V M',
          title: 'Physician',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/11/Dr-Thomas.jpg',
          href: '#',
        },
      ],
      kadavanthra: [
        {
          id: 'ph2',
          name: 'Dr. Radha Unnikrishnan',
          title: 'Physician',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/10/Dr-Saikumar-e1731139512712.jpg',
          href: '#',
        },
      ],
      thripunithura: [
        {
          id: 'ph4',
          name: 'Dr. Joan Karen Meyn',
          title: 'Consultant Physician',
          imageUrl: 'https://www.giridhareye.org/wp-content/uploads/2024/10/Dr-Saikumar-e1731139512712.jpg',
          href: '#',
        },
      ],
    }),
    [],
  );

  const physList = physLoc === 'all' ? physicianDoctors.all : physicianDoctors[physLoc] ?? physicianDoctors.all;

  return (
    <div className="dik">
      <section className="dik-hero" aria-label="Trusted Eye Doctors in Kochi hero">
        <img className="dik-hero__img" src="/doctors-hero.png" alt="Trusted Eye Doctors in Kochi" />
      </section>

      <section className="dik-section dik-dept">
        <div className="dik-section__container">
          <div className="dik-head">
            <h2 className="dik-title">Vitreo Retina</h2>

            <div className="dik-filters" role="tablist" aria-label="Branch filters">
              <button
                type="button"
                className={`dik-filter ${activeBranch === 'all' ? 'is-active' : ''}`}
                onClick={() => setActiveBranch('all')}
                role="tab"
                aria-selected={activeBranch === 'all'}
              >
                All
              </button>
              <button
                type="button"
                className={`dik-filter ${activeBranch === 'kadavanthra' ? 'is-active' : ''}`}
                onClick={() => setActiveBranch('kadavanthra')}
                role="tab"
                aria-selected={activeBranch === 'kadavanthra'}
              >
                Kadavanthra
              </button>
            </div>
          </div>

          <div className="dik-grid" aria-label="Doctor cards">
            {list.map((d) => (
              <article key={d.id} className="dik-card">
                <div className="dik-card__photoWrap">
                  <img className="dik-card__photo" src={d.imageUrl} alt={d.name.replace(/\n/g, ' ')} />
                </div>

                <a className="dik-card__btn" href={d.href} aria-label={`Read more about ${d.name}`}>
                  Read More <span aria-hidden="true">›</span>
                </a>

                <div className="dik-card__footer">
                  <div className="dik-card__name">{d.name}</div>
                  <div className="dik-card__title">{d.title}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dik-services dik-dept">
        <div className="dik-services__container">
          <h2 className="dik-services__title">Cataract Services</h2>

          <div className="dik-services__filters" role="tablist" aria-label="Cataract branch filters">
            {[
              { id: 'all', label: 'All' },
              { id: 'edappally', label: 'Edappally' },
              { id: 'kadavanthra', label: 'Kadavanthra' },
              { id: 'thripunithura', label: 'Thripunithura' },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                className={`dik-services__filter ${cataractLoc === t.id ? 'is-active' : ''}`}
                onClick={() => setCataractLoc(t.id)}
                role="tab"
                aria-selected={cataractLoc === t.id}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="dik-services__divider" aria-hidden="true" />

          <div className="dik-services__grid" aria-label="Cataract doctor cards">
            {cataractList.map((d) => (
              <article key={d.id} className="dik-service-card">
                <div className="dik-service-card__photoWrap">
                  <img className="dik-service-card__photo" src={d.imageUrl} alt="" loading="lazy" />
                </div>
                <a className="dik-service-card__btn" href={d.href}>
                  Read More <span aria-hidden="true">›</span>
                </a>

                <div className="dik-service-card__meta">
                  <div className="dik-service-card__name">{d.name}</div>
                  <div className="dik-service-card__title">{d.title}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dik-glaucoma dik-dept">
        <div className="dik-services__container">
          <h2 className="dik-services__title">Glaucoma Services</h2>

          <div className="dik-services__filters" role="tablist" aria-label="Glaucoma branch filters">
            {[
              { id: 'all', label: 'All' },
              { id: 'kadavanthra', label: 'Kadavanthra' },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                className={`dik-services__filter ${glaucomaLoc === t.id ? 'is-active' : ''}`}
                onClick={() => setGlaucomaLoc(t.id)}
                role="tab"
                aria-selected={glaucomaLoc === t.id}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="dik-services__divider" aria-hidden="true" />

          <div className="dik-orbit-grid" aria-label="Glaucoma doctor card">
            {glaucomaList.map((d) => (
              <article key={d.id} className="dik-service-card">
                <div className="dik-service-card__photoWrap">
                  <img className="dik-service-card__photo" src={d.imageUrl} alt="" loading="lazy" />
                </div>

                <a className="dik-service-card__btn" href={d.href}>
                  Read More <span aria-hidden="true">›</span>
                </a>

                <div className="dik-service-card__meta">
                  <div className="dik-service-card__name">{d.name}</div>
                  <div className="dik-service-card__title">{d.title}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dik-laser dik-dept">
        <div className="dik-services__container">
          <h2 className="dik-services__title">Laser Vision Correction</h2>

          <div className="dik-services__filters" role="tablist" aria-label="Laser branch filters">
            {[
              { id: 'all', label: 'All' },
              { id: 'kadavanthra', label: 'Kadavanthra' },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                className={`dik-services__filter ${laserLoc === t.id ? 'is-active' : ''}`}
                onClick={() => setLaserLoc(t.id)}
                role="tab"
                aria-selected={laserLoc === t.id}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="dik-services__divider" aria-hidden="true" />

          <div className="dik-services__grid" aria-label="Laser doctor cards">
            {laserList.map((d) => (
              <article key={d.id} className="dik-service-card">
                <div className="dik-service-card__photoWrap">
                  <img className="dik-service-card__photo" src={d.imageUrl} alt="" loading="lazy" />
                </div>

                <a className="dik-service-card__btn" href={d.href}>
                  Read More <span aria-hidden="true">›</span>
                </a>

                <div className="dik-service-card__meta">
                  <div className="dik-service-card__name">{d.name}</div>
                  <div className="dik-service-card__title">{d.title}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dik-paed dik-dept">
        <div className="dik-services__container">
          <h2 className="dik-services__title">Paediatric Ophthalmology</h2>

          <div className="dik-services__filters" role="tablist" aria-label="Paediatric branch filters">
            {[
              { id: 'all', label: 'All' },
              { id: 'kadavanthra', label: 'Kadavanthra' },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                className={`dik-services__filter ${paedLoc === t.id ? 'is-active' : ''}`}
                onClick={() => setPaedLoc(t.id)}
                role="tab"
                aria-selected={paedLoc === t.id}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="dik-services__divider" aria-hidden="true" />

          <div className="dik-paed-grid" aria-label="Paediatric doctor cards">
            {paedList.map((d) => (
              <article key={d.id} className="dik-service-card">
                <div className="dik-service-card__photoWrap">
                  <img className="dik-service-card__photo" src={d.imageUrl} alt="" loading="lazy" />
                </div>
                <a className="dik-service-card__btn" href={d.href}>
                  Read More <span aria-hidden="true">›</span>
                </a>
                <div className="dik-service-card__meta">
                  <div className="dik-service-card__name">{d.name}</div>
                  <div className="dik-service-card__title">{d.title}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dik-orbit dik-dept">
        <div className="dik-services__container">
          <h2 className="dik-services__title">Orbit &amp; Oculoplasty</h2>

          <div className="dik-services__filters" role="tablist" aria-label="Orbit branch filters">
            {[
              { id: 'all', label: 'All' },
              { id: 'kadavanthra', label: 'Kadavanthra' },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                className={`dik-services__filter ${orbitLoc === t.id ? 'is-active' : ''}`}
                onClick={() => setOrbitLoc(t.id)}
                role="tab"
                aria-selected={orbitLoc === t.id}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="dik-services__divider" aria-hidden="true" />

          <div className="dik-orbit-grid" aria-label="Orbit doctor cards">
            {orbitList.map((d) => (
              <article key={d.id} className="dik-service-card">
                <div className="dik-service-card__photoWrap">
                  <img className="dik-service-card__photo" src={d.imageUrl} alt="" loading="lazy" />
                </div>
                <a className="dik-service-card__btn" href={d.href}>
                  Read More <span aria-hidden="true">›</span>
                </a>
                <div className="dik-service-card__meta">
                  <div className="dik-service-card__name">{d.name}</div>
                  <div className="dik-service-card__title">{d.title}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dik-ana dik-dept">
        <div className="dik-services__container">
          <h2 className="dik-services__title">Anaesthesia &amp; Infection Control</h2>

          <div className="dik-services__filters" role="tablist" aria-label="Anaesthesia branch filters">
            {[
              { id: 'all', label: 'All' },
              { id: 'kadavanthra', label: 'Kadavanthra' },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                className={`dik-services__filter ${anaLoc === t.id ? 'is-active' : ''}`}
                onClick={() => setAnaLoc(t.id)}
                role="tab"
                aria-selected={anaLoc === t.id}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="dik-services__divider" aria-hidden="true" />

          <div className="dik-ana-grid" aria-label="Anaesthesia doctor cards">
            {anaList.map((d) => (
              <article key={d.id} className="dik-service-card">
                <div className="dik-service-card__photoWrap">
                  <img className="dik-service-card__photo" src={d.imageUrl} alt="" loading="lazy" />
                </div>

                <a className="dik-service-card__btn" href={d.href}>
                  Read More <span aria-hidden="true">›</span>
                </a>

                <div className="dik-service-card__meta">
                  <div className="dik-service-card__name">{d.name}</div>
                  {d.title ? <div className="dik-service-card__title">{d.title}</div> : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dik-phys dik-dept">
        <div className="dik-services__container">
          <h2 className="dik-services__title">Physicians</h2>

          <div className="dik-services__filters" role="tablist" aria-label="Physicians branch filters">
            {[
              { id: 'all', label: 'All' },
              { id: 'edappally', label: 'Edappally' },
              { id: 'kadavanthra', label: 'Kadavanthra' },
              { id: 'thripunithura', label: 'Thripunithura' },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                className={`dik-services__filter ${physLoc === t.id ? 'is-active' : ''}`}
                onClick={() => setPhysLoc(t.id)}
                role="tab"
                aria-selected={physLoc === t.id}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="dik-services__divider" aria-hidden="true" />

          <div className="dik-services__grid" aria-label="Physician cards">
            {physList.map((d) => (
              <article key={d.id} className="dik-service-card">
                <div className="dik-service-card__photoWrap">
                  <img className="dik-service-card__photo" src={d.imageUrl} alt="" loading="lazy" />
                </div>

                <a className="dik-service-card__btn" href={d.href}>
                  Read More <span aria-hidden="true">›</span>
                </a>

                <div className="dik-service-card__meta">
                  <div className="dik-service-card__name">{d.name}</div>
                  <div className="dik-service-card__title">{d.title}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dik-closing">
        <div className="dik-services__container">
          <p className="dik-closing__text">
            Your journey to clearer vision and optimal eye health in Kochi starts here at Giridhar Eye
            Institute. Our commitment to excellence, combined with the expertise of our leading eye
            doctors in Kochi, ensures you receive the highest standard of care in a comfortable and
            supportive environment. Don&apos;t let vision concerns hold you back. Take the proactive step
            towards a brighter future by exploring the profiles of our specialized doctors and
            departments. Contact our dedicated team today to schedule your comprehensive eye examination
            or consultation. We are here to be your trusted partners in vision care, serving Kochi and
            the wider Kerala community with dedication and compassion.
          </p>

          <div className="dik-closing__ctaWrap">
            <a className="dik-closing__cta" href="https://giridhareye.com/e-consultation/" target="_blank" rel="noreferrer">
              <span aria-hidden="true">✣</span> Fix Your Online Consultation Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorsInKochi;

