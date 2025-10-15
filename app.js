const stages = [
  {
    id: 'orientation',
    number: 1,
    title: 'Think in Structured Steps',
    summary:
      'Translate ideas into short, clear statements that describe what the algorithm does from start to finish.',
    objectives: [
      'Describe intent with BEGIN/END structure and precise verbs.',
      'Call out inputs, outputs, and assumptions in plain language.',
      'Break larger goals into an ordered list of actions.'
    ],
    teachingPoints: [
      'Imagine explaining your idea to a classmate without code syntax – what sequence of actions would you describe?',
      'Use one verb per line (Compute, Compare, Display) so each step has a purpose.',
      'Keep the structure top-down: high-level first, then refine into sub-steps.'
    ],
    evaluation: {
      minLines: 4,
      requiredKeywords: ['BEGIN', 'END'],
      optionalKeywords: ['INPUT', 'OUTPUT']
    },
    coachingQuestions: [
      'Did you state the goal right after BEGIN so readers know what this routine accomplishes?',
      'Would a peer understand when the process ends? Use END and a short closing note.'
    ],
    progressionMessage:
      'Great! Your planning muscles are warming up. When you can wrap a solution in BEGIN/END you are ready for more structure.',
    pythonHints: 'Indent blocks the same way you indented ideas here. Each imperative verb will become a Python statement with matching intent.'
  },
  {
    id: 'variables-io',
    number: 2,
    title: 'Work with Inputs and Variables',
    summary:
      'Capture information, name it meaningfully, and describe how values change as the algorithm runs.',
    objectives: [
      'Show where information enters using INPUT/READ statements.',
      'Describe assignments such as SET total TO 0 in words first, symbols second.',
      'Explain what should be displayed back to the user.'
    ],
    teachingPoints: [
      'Treat variables as labeled boxes. Tell the reader when you create one and what it stores.',
      'When comparing or computing values, add a short reason: “to find the larger score”.',
      'Outputs should answer the question stated in the goal line.'
    ],
    evaluation: {
      minLines: 5,
      requiredKeywords: ['INPUT', 'SET', 'OUTPUT'],
      optionalKeywords: ['STORE', 'DISPLAY']
    },
    coachingQuestions: [
      'Which values are you capturing from the learner? Make sure every INPUT is named.',
      'Do you show what the audience sees at the end? OUTPUT the result clearly.'
    ],
    progressionMessage:
      'Inputs and named variables are under control! Next up: guiding the computer on when to choose different paths.',
    pythonHints: 'Replace SET name TO value with Python assignment like name = value. INPUT becomes input(), and OUTPUT becomes print().' 
  },
  {
    id: 'logic-patterns',
    number: 3,
    title: 'Decisions and Looping Patterns',
    summary:
      'Describe how your algorithm branches and repeats, making the flow of control explicit.',
    objectives: [
      'Use IF/ELSE for choices and explain why each branch exists.',
      'Show repetition with WHILE or FOR, including the condition that stops the loop.',
      'Annotate tricky logic with brief comments for future you.'
    ],
    teachingPoints: [
      'State conditions using everyday language: “IF score is greater than pass mark THEN...”.',
      'Describe what changes during each loop iteration to reassure readers the loop will end.',
      'For nested logic, indent or number sub-steps so the structure is obvious.'
    ],
    evaluation: {
      minLines: 6,
      requiredKeywords: ['IF'],
      optionalKeywords: ['ELSE', 'WHILE', 'FOR']
    },
    coachingQuestions: [
      'Where does your decision split paths? Make the IF ... THEN ... ELSE steps explicit.',
      'What condition stops your loop? Mention the check in words.'
    ],
    progressionMessage:
      'Awesome! You are steering the flow with logic. Time to practice classic algorithmic patterns using lists and data collections.',
    pythonHints: 'Match IF/ELSE with Python colons and indentation. WHILE and FOR loops in pseudo code translate one-to-one into Python loop headers.'
  },
  {
    id: 'collections-patterns',
    number: 4,
    title: 'Collections & Classic Algorithms',
    summary:
      'Tackle problems that rely on lists, tallies, and step-by-step refinements like sorting or searching.',
    objectives: [
      'Refer to lists by name and explain what each element represents.',
      'Use FOR EACH or WHILE loops to track progress through the collection.',
      'Describe helper variables such as counters or flags that support the pattern.'
    ],
    teachingPoints: [
      'State whether your loop walks by index or by value. Readers should know how you access each element.',
      'Explain temporary variables (“current smallest”) so the reasoning stays clear.',
      'Close by summarizing the final data structure or statistic you built.'
    ],
    evaluation: {
      minLines: 7,
      requiredKeywords: ['FOR', 'SET'],
      optionalKeywords: ['WHILE', 'LIST', 'APPEND']
    },
    coachingQuestions: [
      'How do you know you visited every element? Mention the loop bounds or termination clearly.',
      'Which helper values carry state between iterations? Highlight them near the top of the loop.'
    ],
    progressionMessage:
      'Collections conquered! Finish strong by packaging your ideas into reusable routines and translating to Python.',
    pythonHints: 'Lists in pseudo code become Python lists. FOR EACH item IN list maps to “for item in list:” with indentation-managed bodies.'
  },
  {
    id: 'modularization',
    number: 5,
    title: 'From Pseudo Code to Python Modules',
    summary:
      'Wrap logic into named routines, describe inputs/outputs formally, and prepare to convert into executable Python.',
    objectives: [
      'Define FUNCTION blocks with clear parameters and return values.',
      'Describe test cases alongside the algorithm to prove correctness.',
      'List the Python keywords or library calls each step will require.'
    ],
    teachingPoints: [
      'Document preconditions (“Assume the list is not empty”) and postconditions (“Returns sorted copy”).',
      'Add sample data and expected results so you can test in the Python lab immediately.',
      'When converting, map each pseudo-code verb to a Python statement. Nothing new should appear in Python that was not planned here.'
    ],
    evaluation: {
      minLines: 8,
      requiredKeywords: ['FUNCTION', 'RETURN'],
      optionalKeywords: ['CALL', 'TEST']
    },
    coachingQuestions: [
      'Can another student reuse this routine? Be explicit about parameters and return values.',
      'Do you describe at least one scenario to test the routine once it becomes Python?' 
    ],
    progressionMessage:
      'You are stage-ready to code! Your pseudo code now flows directly into Python functions with confidence.',
    pythonHints: 'Convert FUNCTION name(param) into “def name(param):”. RETURN statements stay almost identical in Python.'
  }
];

const exampleProblems = [
  {
    id: 'compare-two-numbers',
    title: 'Compare Two Numbers',
    description: 'Ask for two values and identify which one is larger or if they match.',
    focus: 'inputs-variables',
    stages: ['orientation', 'variables-io', 'logic-patterns'],
    tags: ['comparison', 'decision'],
    hint: 'Make sure both inputs are stored before comparing.'
  },
  {
    id: 'grade-from-marks',
    title: 'Create Grade from Marks',
    description: 'Translate a numeric mark into a letter grade using course thresholds.',
    focus: 'logic',
    stages: ['orientation', 'variables-io', 'logic-patterns'],
    tags: ['grading', 'decision'],
    hint: 'Plan grade boundaries from highest to lowest so only one branch triggers.'
  },
  {
    id: 'smallest-in-list',
    title: 'Find Smallest Number',
    description: 'Scan a list of numbers and keep track of the smallest encountered.',
    focus: 'collections',
    stages: ['collections-patterns'],
    tags: ['search', 'loop'],
    hint: 'Initialize “current smallest” to the first element before looping.'
  },
  {
    id: 'sort-list',
    title: 'Sort a List (Selection Sort)',
    description: 'Arrange numbers into ascending order using clear iteration and swapping steps.',
    focus: 'collections',
    stages: ['collections-patterns', 'modularization'],
    tags: ['sorting', 'loop'],
    hint: 'Describe how you select the next smallest element each pass.'
  },
  {
    id: 'quadratic-roots',
    title: 'Roots of a Quadratic',
    description: 'Compute the discriminant and display real roots (or note when none exist).',
    focus: 'math',
    stages: ['variables-io', 'logic-patterns'],
    tags: ['math', 'decision'],
    hint: 'Show how you handle the negative discriminant case clearly.'
  },
  {
    id: 'dice-histogram',
    title: 'Histogram for Die Rolls',
    description: 'Simulate 1000 die rolls and show how many times each face appears.',
    focus: 'simulation',
    stages: ['collections-patterns', 'modularization'],
    tags: ['random', 'histogram'],
    hint: 'Create a list of counters indexed by die face.'
  },
  {
    id: 'letter-histogram',
    title: 'Letter Frequency Histogram',
    description: 'Count how often each letter appears in a block of text.',
    focus: 'strings',
    stages: ['collections-patterns', 'modularization'],
    tags: ['text', 'dictionary'],
    hint: 'Normalize case before counting so A and a are combined.'
  },
  {
    id: 'bubble-sort',
    title: 'Bubble Sort Walkthrough',
    description: 'Repeat passes through a list, swapping out-of-order neighbours until sorted.',
    focus: 'collections',
    stages: ['collections-patterns', 'modularization'],
    tags: ['sorting', 'loop'],
    hint: 'Explain why the list becomes more sorted after each outer loop.'
  },
  {
    id: 'fibonacci-sequence',
    title: 'Generate Fibonacci Sequence',
    description: 'Produce the first n numbers in the Fibonacci series.',
    focus: 'looping',
    stages: ['logic-patterns', 'collections-patterns'],
    tags: ['math', 'sequence'],
    hint: 'Track the previous two values and update them within the loop.'
  },
  {
    id: 'factorial-calculator',
    title: 'Factorial Calculator',
    description: 'Multiply numbers from 1 up to n to compute n factorial.',
    focus: 'looping',
    stages: ['logic-patterns'],
    tags: ['math', 'loop'],
    hint: 'Initialize the product to 1 before the loop begins.'
  },
  {
    id: 'palindrome-check',
    title: 'Check Palindrome Words',
    description: 'Decide whether an input word reads the same forward and backward.',
    focus: 'strings',
    stages: ['logic-patterns'],
    tags: ['string', 'decision'],
    hint: 'Compare the word with its reverse and explain how you generate it.'
  },
  {
    id: 'temperature-converter',
    title: 'Temperature Converter',
    description: 'Convert a Celsius value to Fahrenheit and Kelvin with clear formulae.',
    focus: 'variables',
    stages: ['orientation', 'variables-io'],
    tags: ['math', 'conversion'],
    hint: 'Include both conversion formulas and note the units in OUTPUT.'
  },
  {
    id: 'atm-withdrawal',
    title: 'ATM Withdrawal Flow',
    description: 'Model an ATM session that checks balance, validates PIN, and dispenses cash if possible.',
    focus: 'decision',
    stages: ['logic-patterns', 'modularization'],
    tags: ['decision', 'workflow'],
    hint: 'Use nested IF statements to handle incorrect PIN or insufficient balance.'
  }
];

const STORAGE_KEY = 'pseudocode-pathways-state';
const LEGACY_STORAGE_KEY = 'pseduocode-pathways-state';

const state = {
  activeStageId: stages[0].id,
  completions: {},
  pseudoDrafts: {},
  pythonDrafts: {}
};

const stageList = document.getElementById('stage-list');
const stageContent = document.getElementById('stage-content');
const resetButton = document.getElementById('reset-progress');
const progressBar = document.querySelector('.progress-bar');
const progressFill = document.querySelector('.progress-bar-fill');
const progressPercentage = document.getElementById('progress-percentage');

function loadState() {
  try {
    const saved =
      JSON.parse(localStorage.getItem(STORAGE_KEY)) ||
      JSON.parse(localStorage.getItem(LEGACY_STORAGE_KEY));
    if (saved) {
      Object.assign(state, saved);
    }
  } catch (error) {
    console.warn('Unable to load saved progress', error);
  }
}

function persistState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  try {
    localStorage.removeItem(LEGACY_STORAGE_KEY);
  } catch (error) {
    // ignore cleanup errors (e.g., storage quota issues)
  }
}

function isStageUnlocked(stage) {
  if (stage.number === 1) return true;
  const previousStage = stages.find((s) => s.number === stage.number - 1);
  return Boolean(previousStage && state.completions[previousStage.id]);
}

function renderStageList() {
  stageList.innerHTML = '';
  stages.forEach((stage) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.className = 'stage-pill';
    button.type = 'button';
    button.dataset.stageId = stage.id;

    const unlocked = isStageUnlocked(stage);
    if (!unlocked) {
      button.setAttribute('aria-disabled', 'true');
    }

    if (state.activeStageId === stage.id) {
      button.classList.add('active');
    }

    if (state.completions[stage.id]) {
      button.classList.add('completed');
    }

    button.innerHTML = `
      <span class="stage-indicator">${stage.number}</span>
      <span class="meta">
        <span>Stage ${stage.number}</span>
        <strong>${stage.title}</strong>
      </span>
    `;

    button.addEventListener('click', () => {
      if (!unlocked) return;
      state.activeStageId = stage.id;
      persistState();
      renderStageList();
      renderStage(stage.id);
    });

    li.appendChild(button);
    stageList.appendChild(li);
  });
}

function renderStage(stageId) {
  const stage = stages.find((s) => s.id === stageId);
  if (!stage) return;
  const unlocked = isStageUnlocked(stage);
  if (!unlocked) {
    state.activeStageId = stages.find((s) => isStageUnlocked(s)).id;
    persistState();
    return renderStage(state.activeStageId);
  }

  const availableExamples = exampleProblems.filter((example) => example.stages.includes(stage.id));
  const pseudoDraft = state.pseudoDrafts[stage.id] || '';
  const pythonDraft = state.pythonDrafts[stage.id] || '';

  stageContent.innerHTML = `
    <article class="stage-hero">
      <div class="status-pill ${state.completions[stage.id] ? 'ready' : 'loading'}">
        ${state.completions[stage.id] ? 'Stage completed' : 'In progress'}
      </div>
      <h2>Stage ${stage.number}: ${stage.title}</h2>
      <p>${stage.summary}</p>
      <div>
        <h3>Objectives</h3>
        <ul class="objective-list">
          ${stage.objectives.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </div>
      <div class="callout">
        <strong>Coaching prompts:</strong>
        <ul class="objective-list">
          ${stage.coachingQuestions.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    </article>

    <section class="workspace">
      <div>
        <h3>Plan Your Pseudo Code</h3>
        <p>${stage.teachingPoints[0]}</p>
        <p>${stage.teachingPoints[1]}</p>
        <p>${stage.teachingPoints[2]}</p>
      </div>
      <label class="select-label" for="example-picker">Select a practice challenge</label>
      <select id="example-picker">
        ${availableExamples
          .map(
            (example) => `
            <option value="${example.id}">${example.title}</option>
          `
          )
          .join('')}
      </select>
      <div id="example-details" class="callout"></div>
      <label for="pseudo-editor">Write pseudo code</label>
      <textarea id="pseudo-editor" spellcheck="false" placeholder="BEGIN\n  ..." aria-describedby="pseudo-feedback">${pseudoDraft}</textarea>
      <div class="workspace-actions">
        <button id="check-pseudo" class="primary" type="button">Check pseudo code</button>
        <button id="mark-complete" class="secondary" type="button">Mark stage complete</button>
      </div>
      <div id="pseudo-feedback" role="status"></div>
    </section>

    <section class="example-grid" aria-label="Stage practice ideas">
      ${availableExamples
        .map(
          (example) => `
            <article class="example-card" data-example="${example.id}">
              <h4>${example.title}</h4>
              <p>${example.description}</p>
              <p><strong>Focus:</strong> ${example.focus}</p>
              <p><strong>Hint:</strong> ${example.hint}</p>
            </article>
          `
        )
        .join('')}
    </section>

    <section class="python-lab">
      <div class="python-actions">
        <h3>Convert to Python & Test</h3>
        <span id="pyodide-status" class="status-pill loading">Loading Python runtime…</span>
      </div>
      <p>${stage.pythonHints}</p>
      <label for="python-editor">Python translation</label>
      <textarea id="python-editor" spellcheck="false" placeholder="def solve():\n    ...">${pythonDraft}</textarea>
      <label for="python-input">Provide test input (one value per line)</label>
      <textarea id="python-input" spellcheck="false" placeholder="Sample input values"></textarea>
      <div class="python-actions">
        <button id="run-python" class="primary" type="button">Run code</button>
        <button id="clear-python" class="secondary" type="button">Clear output</button>
      </div>
      <div id="python-output" class="python-output" aria-live="polite"></div>
    </section>
  `;

  hydrateStageInteractions(stage, availableExamples);
}

function hydrateStageInteractions(stage, availableExamples) {
  const pseudoEditor = document.getElementById('pseudo-editor');
  const pythonEditor = document.getElementById('python-editor');
  const pythonInput = document.getElementById('python-input');
  const checkButton = document.getElementById('check-pseudo');
  const markCompleteButton = document.getElementById('mark-complete');
  const pseudoFeedback = document.getElementById('pseudo-feedback');
  const examplePicker = document.getElementById('example-picker');
  const exampleDetails = document.getElementById('example-details');
  const runPythonButton = document.getElementById('run-python');
  const clearPythonButton = document.getElementById('clear-python');
  const pythonOutput = document.getElementById('python-output');

  const initialExample = availableExamples[0];
  updateExampleDetails(initialExample, exampleDetails);
  updatePyodideStatusPills();

  examplePicker.addEventListener('change', (event) => {
    const selected = availableExamples.find((item) => item.id === event.target.value);
    updateExampleDetails(selected, exampleDetails);
  });

  pseudoEditor.addEventListener('input', (event) => {
    state.pseudoDrafts[stage.id] = event.target.value;
    persistState();
  });

  pythonEditor.addEventListener('input', (event) => {
    state.pythonDrafts[stage.id] = event.target.value;
    persistState();
  });

  checkButton.addEventListener('click', () => {
    const feedback = evaluatePseudoCode(stage, pseudoEditor.value);
    displayPseudoFeedback(feedback, pseudoFeedback);
    if (feedback.passed) {
      state.completions[stage.id] = true;
      persistState();
      updateProgress();
      renderStageList();
      pseudoFeedback.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  markCompleteButton.addEventListener('click', () => {
    state.completions[stage.id] = true;
    persistState();
    updateProgress();
    renderStageList();
    displayPseudoFeedback(
      {
        passed: true,
        messages: [
          'Stage manually marked as complete. Revisit anytime to refine your pseudo code.',
          stage.progressionMessage
        ]
      },
      pseudoFeedback
    );
  });

  runPythonButton.addEventListener('click', async () => {
    const code = pythonEditor.value;
    const inputs = pythonInput.value.split('\n').filter((line) => line.length > 0);
    runPythonButton.disabled = true;
    pythonOutput.textContent = 'Running…';
    try {
      const output = await runPython(code, inputs);
      pythonOutput.textContent = output || 'No output produced. Add print statements to observe behaviour.';
    } catch (error) {
      pythonOutput.textContent = `Error: ${error.message}`;
    } finally {
      runPythonButton.disabled = false;
    }
  });

  clearPythonButton.addEventListener('click', () => {
    pythonOutput.textContent = '';
    pythonInput.value = '';
  });

  if (state.completions[stage.id]) {
    displayPseudoFeedback(
      {
        passed: true,
        messages: [stage.progressionMessage]
      },
      pseudoFeedback
    );
  }
}

function updateExampleDetails(example, container) {
  if (!example) {
    container.textContent = '';
    return;
  }

  container.innerHTML = `
    <strong>${example.title}</strong>
    <p>${example.description}</p>
    <p><em>Hint:</em> ${example.hint}</p>
    <p><em>Suggested focus:</em> ${example.tags.join(', ')}</p>
  `;
}

function evaluatePseudoCode(stage, text) {
  const messages = [];
  const trimmed = text.trim();

  if (!trimmed) {
    messages.push('Start by outlining the high-level steps. A blank workspace can\'t be evaluated.');
  }

  const lines = trimmed.split(/\n/).filter((line) => line.trim().length > 0);
  if (stage.evaluation.minLines && lines.length < stage.evaluation.minLines) {
    messages.push(`Aim for at least ${stage.evaluation.minLines} meaningful lines. You currently have ${lines.length}.`);
  }

  const normalized = trimmed.toUpperCase();

  if (stage.evaluation.requiredKeywords) {
    stage.evaluation.requiredKeywords.forEach((keyword) => {
      if (!normalized.includes(keyword)) {
        messages.push(`Add the ${keyword} step to satisfy the expectations for this stage.`);
      }
    });
  }

  if (stage.evaluation.optionalKeywords) {
    const missingOptional = stage.evaluation.optionalKeywords.filter((keyword) => !normalized.includes(keyword));
    if (missingOptional.length > 0) {
      messages.push(`Consider weaving in: ${missingOptional.join(', ')} to make the flow clearer.`);
    }
  }

  const passed = messages.length === 0;
  if (passed) {
    messages.push(stage.progressionMessage);
  }

  return { passed, messages };
}

function displayPseudoFeedback(feedback, container) {
  const { passed, messages } = feedback;
  container.className = `feedback ${passed ? 'success' : 'error'}`;
  container.innerHTML = `
    <strong>${passed ? 'Looking good!' : 'Keep refining'}</strong>
    <ul>${messages.map((msg) => `<li>${msg}</li>`).join('')}</ul>
  `;
}

function updateProgress() {
  const totalStages = stages.length;
  const completed = stages.filter((stage) => state.completions[stage.id]).length;
  const percentage = Math.round((completed / totalStages) * 100);
  progressFill.style.width = `${percentage}%`;
  progressBar.setAttribute('aria-valuenow', String(percentage));
  progressPercentage.textContent = `${percentage}%`;
}

resetButton.addEventListener('click', () => {
  if (!confirm('Reset all saved progress and drafts?')) return;
  state.activeStageId = stages[0].id;
  state.completions = {};
  state.pseudoDrafts = {};
  state.pythonDrafts = {};
  persistState();
  updateProgress();
  renderStageList();
  renderStage(state.activeStageId);
});

loadState();
renderStageList();
renderStage(state.activeStageId);
updateProgress();

let pyodideReadyPromise = null;
let pyodideReady = false;

async function preparePyodide() {
  if (!pyodideReadyPromise) {
    pyodideReadyPromise = loadPyodide({
      indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.23.4/full/'
    }).then(async (pyodide) => {
      await pyodide.runPythonAsync(`
import sys
from io import StringIO
from collections import deque
import builtins


def __run_user_code(code, inputs):
    buffer = StringIO()
    input_queue = deque(inputs)

    def custom_input(prompt=None):
        if prompt is not None:
            buffer.write(str(prompt))
        if not input_queue:
            raise EOFError("No more input provided.")
        return input_queue.popleft()

    old_input = builtins.input
    old_stdout, old_stderr = sys.stdout, sys.stderr
    try:
        builtins.input = custom_input
        sys.stdout = buffer
        sys.stderr = buffer
        exec(code, {})
    finally:
        builtins.input = old_input
        sys.stdout = old_stdout
        sys.stderr = old_stderr
    return buffer.getvalue()
      `);
      return pyodide;
    });
  }
  return pyodideReadyPromise;
}

preparePyodide().then(() => {
  pyodideReady = true;
  updatePyodideStatusPills();
});

async function runPython(code, inputs) {
  if (!code.trim()) {
    throw new Error('Write some Python code to execute.');
  }
  const pyodide = await preparePyodide();
  try {
    return await pyodide.runPythonAsync(`__run_user_code(${JSON.stringify(code)}, ${JSON.stringify(inputs)})`);
  } catch (error) {
    throw new Error(error.message);
  }
}

window.addEventListener('storage', (event) => {
  if (event.key === STORAGE_KEY || event.key === LEGACY_STORAGE_KEY) {
    loadState();
    renderStageList();
    renderStage(state.activeStageId);
    updateProgress();
  }
});

function updatePyodideStatusPills() {
  const statusPills = document.querySelectorAll('#pyodide-status');
  statusPills.forEach((pill) => {
    if (pyodideReady) {
      pill.classList.remove('loading');
      pill.classList.add('ready');
      pill.textContent = 'Python runtime ready';
    } else {
      pill.classList.add('loading');
      pill.classList.remove('ready');
      pill.textContent = 'Loading Python runtime…';
    }
  });
}
