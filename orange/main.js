import './style.css'

// Direct Discord webhook submit (no backend)
const WEBHOOK_URL = 'https://discord.com/api/webhooks/1440185420205002822/KftqU5u05haDfE_GDIKdZ1Id_UnlRt15NeSgm_yZOiMP61-0SkfLmYgUOz5VT_qJUTk8'

document.querySelector('#orange').innerHTML = /*html*/`
  <div class="page">
    <div class="answer-box">
      <form class="orange-form">
        <section id="name" class="step active">
          <div class="textarea">
            <h3><span class="req">*</span> What's your Discord username?</h3>
            <p class="desc">Let us know how to contact you on Discord.</p>
          </div>
          <input
            class="answer-input"
            type="text"
            name="discord"
            placeholder="drsteeve"
            minlength="2"
            maxlength="32"
            required
          />
          <div class="answer-hint"></div>
          <div class="step-nav">
            <button class="next-btn sumbit" type="button">Next</button>
          </div>
        </section>

        <section id="javaName" class="step">
          <div class="textarea">
            <h3><span class="req">*</span> What's your Java Minecraft username?</h3>
            <p class="desc">Your in-game name on Java edition (not Bedrock).</p>
          </div>
          <input
            class="answer-input"
            type="text"
            name="javaName"
            placeholder="DrSteeve"
            minlength="4"
            required
          />
          <div class="answer-hint"></div>
          <div class="step-nav">
            <button class="back-btn" type="button">Back</button>
            <button class="next-btn sumbit" type="button">Next</button>
          </div>
        </section>

        <section id="timespent" class="step">
          <div class="textarea">
            <h3>How long have you been playing Minecraft?</h3>
            <p class="desc">Optional. This just helps us understand your experience with the game.</p>
          </div>
          <input
            class="answer-input"
            type="text"
            name="timeSpent"
            placeholder="3 years"
          />
          <div class="answer-hint"></div>
          <div class="step-nav">
            <button class="back-btn" type="button">Back</button>
            <button class="next-btn sumbit" type="button">Next</button>
          </div>
        </section>

        <section id="age" class="step">
          <div class="textarea">
            <h3><span class="req">*</span> How old are you?</h3>
            <p class="desc">You must be between 11 and 16 so everyone is around a similar age.</p>
          </div>
          <input
            class="answer-input"
            type="text"
            name="age"
            placeholder="14"
            required
          />
          <div class="answer-hint"></div>
          <div class="step-nav">
            <button class="back-btn" type="button">Back</button>
            <button class="next-btn sumbit" type="button">Next</button>
          </div>
        </section>

        <section id="timeZone" class="step">
          <div class="textarea">
            <h3><span class="req">*</span> What's your timezone?</h3>
            <p class="desc">This helps us know when you’re usually online.</p>
          </div>
          <input
            class="answer-input"
            type="text"
            name="timeZone"
            placeholder="UTC+8"
            pattern="[A-Za-z]{3}[+-][0-9]{1,2}"
            required
          />
          <div class="answer-hint"></div>
          <div class="step-nav">
            <button class="back-btn" type="button">Back</button>
            <button class="next-btn sumbit" type="button">Next</button>
          </div>
        </section>

        <section id="knwoyou" class="step">
          <div class="textarea">
            <h3><span class="req">*</span> Getting to know you</h3>
            <p class="desc">Share a short video link or write a few sentences about yourself.</p>
          </div>

          <textarea
            class="answer-input answer-textarea"
            name="about"
            placeholder="Paste a link or introduce yourself here..."
            required
          ></textarea>

          <div class="answer-hint"></div>
          <div class="step-nav">
            <button class="back-btn" type="button">Back</button>
            <button class="submit-btn sumbit" type="submit">Submit</button>
          </div>
        </section>
      </form>
    </div>

    <div class="submit-overlay" id="submit-overlay">
      <div class="submit-overlay-inner">
        <span class="submit-overlay-text">Submitting</span>
      </div>
    </div>
  </div>
`
  
const form = document.querySelector('.orange-form')
const overlay = document.getElementById('submit-overlay')
const overlayText = overlay?.querySelector('.submit-overlay-text')

const steps = Array.from(form.querySelectorAll('.step'))

let currentStepIndex = 0
let isSubmitting = false
let overlayDotsInterval = null

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle('active', i === index)
  })
  currentStepIndex = index
}

function showSubmittingOverlay() {
  if (!overlay) return
  overlay.classList.add('active')
  if (!overlayText) return

  let dotCount = 0
  overlayText.textContent = 'Submitting'

  overlayDotsInterval = setInterval(() => {
    dotCount = (dotCount + 1) % 4
    const dots = '.'.repeat(dotCount)
    overlayText.textContent = `Submitting${dots}`
  }, 400)
}

function hideSubmittingOverlay() {
  if (!overlay) return
  overlay.classList.remove('active')
  if (overlayDotsInterval) {
    clearInterval(overlayDotsInterval)
    overlayDotsInterval = null
  }
}

function setStepError(step, message, field) {
  const hint = step.querySelector('.answer-hint')
  if (hint) {
    hint.textContent = message
    hint.classList.add('answer-hint-error')
  }
  if (field) {
    field.classList.add('answer-input-error')
  }
}

function clearStepError(step) {
  const hint = step.querySelector('.answer-hint')
  if (hint) {
    hint.textContent = ''
    hint.classList.remove('answer-hint-error')
  }
}

steps.forEach((step, index) => {
  const nextBtn = step.querySelector('.next-btn')
  const backBtn = step.querySelector('.back-btn')

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      clearStepError(step)

      const requiredFields = step.querySelectorAll('[required]')
      for (const field of requiredFields) {
        if (!field.value.trim()) {
          setStepError(step, 'This field is required.', field)
          field.focus()
          return
        }
      }

      const stepId = step.id

      if (stepId === 'name') {
        const discordField = step.querySelector('input[name="discord"]')
        const value = discordField.value.trim()
        const discordRegex = /^[A-Za-z0-9._]+$/

        if (value.length < 2 || value.length > 32) {
          setStepError(step, 'Discord username must be between 2 and 32 characters.', discordField)
          discordField.focus()
          return
        }

        if (!discordRegex.test(value)) {
          setStepError(step, 'Discord username can only contain letters, numbers, underscores, and periods.', discordField)
          discordField.focus()
          return
        }
      }

      if (stepId === 'javaName') {
        const mcField = step.querySelector('input[name="javaName"]')
        const value = mcField.value.trim()
        const mcRegex = /^[A-Za-z0-9_]+$/
        if (value.length < 4 || !mcRegex.test(value)) {
          const message = value.length < 4
            ? 'Minecraft username must be at least 4 characters.'
            : 'Minecraft username can only contain letters, numbers, and underscores.'
          setStepError(step, message, mcField)
          mcField.focus()
          return
        }
      }

      if (stepId === 'age') {
        const ageField = step.querySelector('input[name="age"]')
        const ageValue = ageField.value.trim()
        const ageNumber = Number(ageValue)
        if (!Number.isFinite(ageNumber)) {
          setStepError(step, 'Age must be a number.', ageField)
          ageField.focus()
          return
        }
        if (ageNumber < 11 || ageNumber > 16) {
          setStepError(step, 'Age must be between 11 and 16.', ageField)
          ageField.focus()
          return
        }
      }

      if (stepId === 'timeZone') {
        const tzField = step.querySelector('input[name="timeZone"]')
        const value = tzField.value.trim()
        const tzRegex = /^[A-Za-z]{3}[+-][0-9]{1,2}$/
        if (!tzRegex.test(value)) {
          setStepError(
            step,
            'Timezone must be 3 letters, then + or -, then a 1–2 digit number (e.g. UTC+8).',
            tzField
          )
          tzField.focus()
          return
        }
      }

      if (index < steps.length - 1) {
        showStep(index + 1)
      }
    })
  }

  if (backBtn) {
    backBtn.addEventListener('click', () => {
      if (index > 0) {
        showStep(index - 1)
      }
    })
  }
})

form.addEventListener('submit', async (event) => {
  if (isSubmitting) {
    event.preventDefault()
    return
  }

  if (!form.checkValidity()) {
    event.preventDefault()
    const firstInvalid = form.querySelector(':invalid')
    if (firstInvalid) {
      const step = firstInvalid.closest('.step')
      const index = steps.indexOf(step)
      if (index !== -1) {
        showStep(index)
      }
      setStepError(step, 'Please fix this field.', firstInvalid)
      firstInvalid.focus()
    }
    return
  }

  event.preventDefault()
  isSubmitting = true
  showSubmittingOverlay()

  const data = {
    discord: form.discord.value.trim(),
    javaName: form.javaName.value.trim(),
    timeSpent: form.timeSpent.value.trim(),
    age: form.age.value.trim(),
    timeZone: form.timeZone.value.trim(),
    about: form.about.value.trim()
  }

  try {
    const content = [
      '**New application**',
      `Discord: ${data.discord}`,
      `MC Java: ${data.javaName}`,
      `Age: ${data.age}`,
      `Timezone: ${data.timeZone}`,
      `Playing for: ${data.timeSpent || 'N/A'}`,
      `About: ${data.about || 'N/A'}`
    ].join('\n')

    const formData = new FormData()
    formData.append('content', content)

    await fetch(WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: formData
    })

    // on success, send back to main forum page
    window.location.href = import.meta.env.BASE_URL
  } catch (err) {
    console.error(err)
    const lastStep = steps[steps.length - 1]
    setStepError(lastStep, 'Something went wrong sending your application. Try again in a minute.')
    hideSubmittingOverlay()
    isSubmitting = false
  }
})

// Clear error styles when user starts typing
const allInputs = form.querySelectorAll('.answer-input')
allInputs.forEach((field) => {
  field.addEventListener('input', () => {
    field.classList.remove('answer-input-error')
    const step = field.closest('.step')
    if (step) {
      clearStepError(step)
    }
  })

  field.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return

    // Don't hijack Enter inside textarea; allow new lines
    if (field.tagName === 'TEXTAREA') return

    event.preventDefault()
    const step = field.closest('.step')
    if (!step) return

    const nextBtn = step.querySelector('.next-btn')
    const submitBtn = step.querySelector('.submit-btn')

    if (nextBtn) {
      nextBtn.click()
    } else if (submitBtn) {
      submitBtn.click()
    }
  })
})
