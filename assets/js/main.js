(() => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const page = document.body.dataset.page;

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  document.querySelectorAll('.nav-links a').forEach((link) => {
    if (link.dataset.page === page) {
      link.classList.add('active');
    }

    link.addEventListener('click', () => {
      if (navLinks && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        navToggle?.setAttribute('aria-expanded', 'false');
      }
    });
  });

  const eventsData = [
    {
      title: 'PLACEHOLDER: Community Prayer Night',
      date: 'March 8, 2025',
      time: '6:30 PM',
      location: 'Sanctuary',
      description: 'An evening of worship and intercession for our city.',
    },
    {
      title: 'PLACEHOLDER: Youth Worship Gathering',
      date: 'March 14, 2025',
      time: '7:00 PM',
      location: 'Student Center',
      description: 'Students and young adults coming together for music and a short word.',
    },
    {
      title: 'PLACEHOLDER: Family Outreach Day',
      date: 'March 22, 2025',
      time: '10:00 AM',
      location: 'Neighborhood Park',
      description: 'Serve alongside families as we distribute care packages.',
    },
    {
      title: 'PLACEHOLDER: Resurrection Sunday Celebration',
      date: 'March 30, 2025',
      time: '9:00 AM & 11:00 AM',
      location: 'Main Campus',
      description: 'Join us for a special service of praise and hope.',
    },
  ];

  const buildIcsHref = (event) => {
    const uid = `${event.title.replace(/\s+/g, '-')}-nealstemple`; // simple uid
    const lines = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Neal\'s Temple of Holiness//Events//EN',
      'BEGIN:VEVENT',
      `UID:${uid}`,
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.description}`,
      `LOCATION:${event.location}`,
      'DTSTART:20250301T150000Z',
      'DTEND:20250301T160000Z',
      'END:VEVENT',
      'END:VCALENDAR',
    ];
    return `data:text/calendar;charset=utf-8,${encodeURIComponent(lines.join('\n'))}`;
  };

  const renderEvents = (container, list) => {
    if (!container) return;
    container.innerHTML = '';
    list.forEach((event) => {
      const card = document.createElement('article');
      card.className = 'card event-card';
      card.innerHTML = `
        <div class="event-meta">${event.date} • ${event.time} • ${event.location}</div>
        <h3>${event.title}</h3>
        <p>${event.description}</p>
        <div class="event-actions">
          <a class="btn btn-secondary" href="events.html#events">View details</a>
          <a class="btn btn-ghost" href="${buildIcsHref(event)}" download="${event.title.replace(/\s+/g, '-').toLowerCase()}.ics">Add to calendar</a>
        </div>
      `;
      container.appendChild(card);
    });
  };

  const upcomingContainer = document.querySelector('[data-events="upcoming"]');
  if (upcomingContainer) {
    renderEvents(upcomingContainer, eventsData.slice(0, 3));
  }

  const fullEventsContainer = document.querySelector('[data-events="full"]');
  if (fullEventsContainer) {
    renderEvents(fullEventsContainer, eventsData);
  }

  const contactForm = document.getElementById('contact-form');
  const statusEl = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');

  const setFieldError = (fieldId, message) => {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(`${fieldId}-error`);
    if (!field || !errorEl) return;
    errorEl.textContent = message || '';
    if (message) {
      field.setAttribute('aria-invalid', 'true');
    } else {
      field.removeAttribute('aria-invalid');
    }
  };

  const validateEmail = (value) => /[^\s@]+@[^\s@]+\.[^\s@]+/.test(value);

  contactForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    setFieldError('name', '');
    setFieldError('email', '');
    setFieldError('message', '');
    statusEl.textContent = '';
    statusEl.className = 'status-message';

    const formData = new FormData(contactForm);
    const name = formData.get('name')?.toString().trim() || '';
    const email = formData.get('email')?.toString().trim() || '';
    const phone = formData.get('phone')?.toString().trim() || '';
    const message = formData.get('message')?.toString().trim() || '';

    const errors = [];
    if (!name) {
      errors.push('name');
      setFieldError('name', 'Please enter your name.');
    }
    if (!email || !validateEmail(email)) {
      errors.push('email');
      setFieldError('email', 'Enter a valid email address.');
    }
    if (!message) {
      errors.push('message');
      setFieldError('message', 'Let us know how we can serve you.');
    }

    if (errors.length) {
      statusEl.textContent = 'Please correct the highlighted fields and try again.';
      statusEl.classList.add('error');
      statusEl.setAttribute('role', 'alert');
      statusEl.focus?.();
      return;
    }

    statusEl.textContent = 'Submitting your message…';
    statusEl.classList.add('success');
    submitBtn.disabled = true;

    setTimeout(() => {
      statusEl.textContent = 'Thank you. Your message has been received (simulation).';
      contactForm.reset();
      submitBtn.disabled = false;
    }, 900);
  });
})();
