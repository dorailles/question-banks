import{G as e,L as t,T as n,U as r,t as i}from"./v2-l9WzeLaM.js";import{i as a,n as o,r as s,t as c}from"./v2-Bqzh4AyJ.js";import{H as l,T as u,jt as d,nn as f}from"./v2-B6fNyh8s.js";import{t as p}from"./v2-XlOHZN-t.js";import{t as m}from"./v2-BB9lu49P.js";import{t as h}from"./v2-BQBuP6Sj.js";import{t as g}from"./v2-BmYemjd_.js";import{n as _,t as v}from"./v2-DkfKRcR3.js";import{SpecSheet as y}from"./SpecSheet-Cfi35VV4.js";var b=`import React from 'react'
import { View } from '@instructure/ui-view/latest'
import { Flex } from '@instructure/ui-flex/latest'
import { Heading } from '@instructure/ui-heading/latest'
import { Text } from '@instructure/ui-text/latest'
import { Button } from '@instructure/ui-buttons/latest'
import type { FrameCtx } from '../../../components/SpecSheet'

// Component states: the six conditions that drive the Begin button on the
// launch page. Each row pairs the rendered control with the gating rule.
export function launchBeginStates({ sharedTokens }: FrameCtx): React.ReactNode {
  const states: { label: string; rule: string; render: React.ReactNode }[] = [
    {
      label: 'Active',
      rule: 'Quiz open, attempts remaining, no cooldown, no access code',
      render: <Button color="primary">Begin</Button>,
    },
    {
      label: 'Locked — not open yet',
      rule: 'Before the Available From date',
      render: (
        <Button color="primary" interaction="disabled">
          Available Jun 30 at 8:00 AM
        </Button>
      ),
    },
    {
      label: 'Locked — closed',
      rule: 'After the Until date',
      render: (
        <Button color="primary" interaction="disabled">
          Quiz closed
        </Button>
      ),
    },
    {
      label: 'Locked — no attempts left',
      rule: 'All allowed attempts used',
      render: (
        <Button color="primary" interaction="disabled">
          No attempts remaining
        </Button>
      ),
    },
    {
      label: 'Locked — cooldown active',
      rule: 'Time between attempts has not elapsed',
      render: (
        <Button color="primary" interaction="disabled">
          Next attempt available 3:30 PM
        </Button>
      ),
    },
    {
      label: 'Locked — access code required',
      rule: 'Code required but not yet entered',
      render: (
        <Button color="primary" interaction="disabled">
          Begin
        </Button>
      ),
    },
  ]

  return (
    <View
      as="div"
      width="100%"
      display="block"
      background="secondary"
      themeOverride={{ backgroundSecondary: sharedTokens.background.pageColor }}
      padding="medium"
    >
      <Flex direction="column" gap="0">
        {states.map((s, i) => (
          <View
            key={s.label}
            as="div"
            display="block"
            borderWidth={i === states.length - 1 ? '0' : '0 0 small 0'}
            padding="small 0"
          >
            <Flex gap="large" alignItems="center" wrap="wrap">
              <Flex.Item size="16rem">{s.render}</Flex.Item>
              <Flex.Item shouldGrow shouldShrink>
                <Flex direction="column" gap="xxx-small">
                  <Heading level="h4" margin="0">
                    {s.label}
                  </Heading>
                  <Text color="secondary" size="small">
                    {s.rule}
                  </Text>
                </Flex>
              </Flex.Item>
            </Flex>
          </View>
        ))}
      </Flex>
    </View>
  )
}
`,x=`import React from 'react'
import { View } from '@instructure/ui-view/latest'
import { Flex } from '@instructure/ui-flex/latest'
import { Heading } from '@instructure/ui-heading/latest'
import { Text } from '@instructure/ui-text/latest'
import { Button } from '@instructure/ui-buttons/latest'
import { Pill } from '@instructure/ui-pill/latest'
import type { FrameCtx } from '../../../components/SpecSheet'

// Launch page (pre-attempt). Header metadata strip, instructions, attempt
// history, and an active Begin button — the happy-path entry to the player.
export function launchDefault({ sharedTokens }: FrameCtx): React.ReactNode {
  const page = {
    as: 'div' as const,
    width: '100%' as const,
    height: '100%' as const,
    display: 'block' as const,
    background: 'secondary' as const,
    themeOverride: { backgroundSecondary: sharedTokens.background.pageColor },
    padding: 'large' as const,
    overflowX: 'hidden' as const,
    overflowY: 'auto' as const,
  }
  const card = {
    as: 'div' as const,
    display: 'block' as const,
    background: 'primary' as const,
    themeOverride: { backgroundPrimary: sharedTokens.background.containerColor },
    borderRadius: sharedTokens.borderRadius.card.lg,
    shadow: 'resting' as const,
  }
  const fieldShell = {
    as: 'div' as const,
    display: 'block' as const,
    background: 'secondary' as const,
    themeOverride: { backgroundSecondary: sharedTokens.background.pageColor },
    borderRadius: sharedTokens.borderRadius.card.md,
  }

  function stat(value: string, label: string) {
    return (
      <Flex.Item>
        <Flex direction="column">
          <Heading level="h2" margin="0">
            {value}
          </Heading>
          <Text color="secondary" size="small">
            {label}
          </Text>
        </Flex>
      </Flex.Item>
    )
  }

  return (
    <View {...page}>
      <View as="div" maxWidth="56rem" display="block" margin="0 auto" width="100%">
        <View {...card} padding="large">
          <Heading level="h1" variant="titlePageDesktop" margin="0 0 large 0">
            Introduction to Biology — Quiz 1
          </Heading>

          {/* Header metadata strip */}
          <Flex gap="x-large" alignItems="end" margin="0 0 large 0" wrap="wrap">
            {stat('No Time Limit', 'Time limit')}
            {stat('6/28/2026 7:59 AM', 'Due')}
            {stat('48', 'Points')}
            {stat('3', 'Allowed attempts')}
          </Flex>

          {/* Instructions block */}
          <View {...fieldShell} padding="medium" margin="0 0 large 0">
            <Heading level="h3" margin="0 0 x-small 0">
              Instructions
            </Heading>
            <Text as="p">
              This quiz covers cell structure, genetics, and cell division. Answer every question to
              the best of your ability. Essay and file upload responses are reviewed by your
              instructor after you submit.
            </Text>
          </View>

          {/* Attempt history */}
          <Heading level="h3" margin="0 0 small 0">
            Attempt history
          </Heading>
          <View {...fieldShell} padding="0" margin="0 0 large 0">
            <Flex padding="x-small medium" gap="medium">
              <Flex.Item size="8rem">
                <Text weight="bold" size="small" color="secondary">
                  Attempt
                </Text>
              </Flex.Item>
              <Flex.Item shouldGrow shouldShrink>
                <Text weight="bold" size="small" color="secondary">
                  Submitted
                </Text>
              </Flex.Item>
              <Flex.Item size="8rem">
                <Text weight="bold" size="small" color="secondary">
                  Score
                </Text>
              </Flex.Item>
            </Flex>
            <View as="div" display="block" borderWidth="small 0 0 0" padding="small medium">
              <Flex gap="medium" alignItems="center">
                <Flex.Item size="8rem">
                  <Text color="brand" weight="bold">
                    Attempt 1
                  </Text>
                </Flex.Item>
                <Flex.Item shouldGrow shouldShrink>
                  <Text>Jun 20 at 4:12 PM</Text>
                </Flex.Item>
                <Flex.Item size="8rem">
                  <Text>41 of 48 pts</Text>
                </Flex.Item>
              </Flex>
            </View>
          </View>

          <Flex gap="small" alignItems="center" wrap="wrap">
            <Button color="primary">Begin</Button>
            <Pill>2 attempts remaining</Pill>
            <Text color="secondary" size="small">
              Highest score is kept
            </Text>
          </Flex>
        </View>
      </View>
    </View>
  )
}
`,S=`import React from 'react'
import { View } from '@instructure/ui-view/latest'
import { Flex } from '@instructure/ui-flex/latest'
import { Heading } from '@instructure/ui-heading/latest'
import { Text } from '@instructure/ui-text/latest'
import { Pill } from '@instructure/ui-pill/latest'
import { CheckCircleInstUIIcon, XInstUIIcon } from '@instructure/ui-icons'
import type { FrameCtx } from '../../../components/SpecSheet'

// Results page, fully graded: score summary header plus the itemized question
// review with correctness indicators and revealed correct answers.
export function resultsGraded({ sharedTokens }: FrameCtx): React.ReactNode {
  const page = {
    as: 'div' as const,
    width: '100%' as const,
    height: '100%' as const,
    display: 'block' as const,
    background: 'secondary' as const,
    themeOverride: { backgroundSecondary: sharedTokens.background.pageColor },
    padding: 'large' as const,
    overflowX: 'hidden' as const,
    overflowY: 'auto' as const,
  }
  const card = {
    as: 'div' as const,
    display: 'block' as const,
    background: 'primary' as const,
    themeOverride: { backgroundPrimary: sharedTokens.background.containerColor },
    borderRadius: sharedTokens.borderRadius.card.lg,
    shadow: 'resting' as const,
  }

  function answer(text: string, ok: boolean | null, note?: string) {
    const color = ok === null ? 'secondary' : ok ? 'success' : 'danger'
    return (
      <Flex gap="x-small" alignItems="center">
        {ok !== null && (
          <Text color={color}>{ok ? <CheckCircleInstUIIcon /> : <XInstUIIcon />}</Text>
        )}
        <Text color={color} weight={ok ? 'bold' : 'normal'}>
          {text}
        </Text>
        {note && (
          <Text size="small" color="secondary">
            {note}
          </Text>
        )}
      </Flex>
    )
  }

  return (
    <View {...page}>
      <View as="div" maxWidth="56rem" display="block" margin="0 auto" width="100%">
        <View {...card} padding="large">
          <Heading level="h1" variant="titlePageDesktop" margin="0">
            Results
          </Heading>
          <Text as="p" color="secondary">
            Balazs Student · Introduction to Biology — Quiz 1
          </Text>

          {/* Score summary */}
          <Flex gap="x-large" alignItems="center" margin="large 0" wrap="wrap">
            <Flex.Item>
              <View
                as="div"
                display="block"
                borderWidth="large"
                borderColor="success"
                borderRadius="circle"
                padding="medium"
                width="6rem"
                height="6rem"
                textAlign="center"
              >
                <Flex height="100%" alignItems="center" justifyItems="center">
                  <Heading level="h2" margin="0">
                    85%
                  </Heading>
                </Flex>
              </View>
            </Flex.Item>
            <Flex.Item>
              <Flex direction="column">
                <Heading level="h2" margin="0">
                  41 of 48
                </Heading>
                <Text color="secondary" size="small">
                  Points earned
                </Text>
              </Flex>
            </Flex.Item>
          </Flex>

          <Heading level="h2" variant="titleCardRegular" margin="0 0 small 0">
            Your answers
          </Heading>

          <Flex direction="column">
            <View as="div" display="block" borderWidth="0 0 small 0" padding="medium 0">
              <Flex gap="small" alignItems="center" margin="0 0 small 0">
                <Pill>Multiple Choice</Pill>
                <Text weight="bold" color="success">
                  5 / 5 points
                </Text>
              </Flex>
              <Text as="p">Which organelle is known as the powerhouse of the cell?</Text>
              {answer('Mitochondria', true, '(your answer)')}
            </View>

            <View as="div" display="block" borderWidth="0 0 small 0" padding="medium 0">
              <Flex gap="small" alignItems="center" margin="0 0 small 0">
                <Pill>Fill in the Blank</Pill>
                <Text weight="bold" color="danger">
                  0 / 4 points
                </Text>
              </Flex>
              <Text as="p">The process by which plants convert sunlight into energy is called ______.</Text>
              {answer('photosynthsis', false, '(your answer)')}
              <View as="div" display="block" margin="xxx-small 0 0 0">
                <Text size="small" color="secondary">
                  Accepted answer:{' '}
                  <Text size="small" weight="bold">
                    photosynthesis
                  </Text>
                </Text>
              </View>
            </View>

            <View as="div" display="block" padding="medium 0">
              <Flex gap="small" alignItems="center" margin="0 0 small 0">
                <Pill>Ordering</Pill>
                <Text weight="bold" color="success">
                  3 / 3 points
                </Text>
              </Flex>
              <Text as="p">Place the stages of mitosis in the correct order.</Text>
              <Flex direction="column" gap="xxx-small">
                {answer('1. Prophase', true)}
                {answer('2. Metaphase', true)}
                {answer('3. Anaphase', true)}
                {answer('4. Telophase', true)}
              </Flex>
            </View>
          </Flex>
        </View>
      </View>
    </View>
  )
}
`,C=`import React from 'react'
import { View } from '@instructure/ui-view/latest'
import { Flex } from '@instructure/ui-flex/latest'
import { Heading } from '@instructure/ui-heading/latest'
import { Text } from '@instructure/ui-text/latest'
import { Pill } from '@instructure/ui-pill/latest'
import { Alert } from '@instructure/ui-alerts/latest'
import type { FrameCtx } from '../../../components/SpecSheet'

// Results page, partially graded — the current iteration focus. Auto-graded
// points are final; essay and file-upload items are pending instructor review.
// This board shows the partial state the score chart has to represent.
export function resultsPartial({ sharedTokens }: FrameCtx): React.ReactNode {
  const card = {
    as: 'div' as const,
    display: 'block' as const,
    background: 'primary' as const,
    themeOverride: { backgroundPrimary: sharedTokens.background.containerColor },
    borderRadius: sharedTokens.borderRadius.card.lg,
    shadow: 'resting' as const,
  }

  return (
    <View
      as="div"
      width="100%"
      display="block"
      background="secondary"
      themeOverride={{ backgroundSecondary: sharedTokens.background.pageColor }}
      padding="large"
    >
      <View {...card} padding="large" maxWidth="46rem">
        <Heading level="h1" variant="titlePageDesktop" margin="0">
          Results
        </Heading>
        <Text as="p" color="secondary">
          Balazs Student · Introduction to Biology — Quiz 1
        </Text>

        <Flex gap="x-large" alignItems="center" margin="large 0" wrap="wrap">
          <Flex.Item>
            <View
              as="div"
              display="block"
              borderWidth="large"
              borderRadius="circle"
              padding="medium"
              width="6rem"
              height="6rem"
              textAlign="center"
            >
              <Flex height="100%" alignItems="center" justifyItems="center">
                <Heading level="h2" margin="0">
                  79%
                </Heading>
              </Flex>
            </View>
          </Flex.Item>
          <Flex.Item>
            <Flex direction="column">
              <Heading level="h2" margin="0">
                30 of 38
              </Heading>
              <Text color="secondary" size="small">
                Auto-graded points
              </Text>
            </Flex>
          </Flex.Item>
          <Flex.Item>
            <Flex direction="column">
              <Heading level="h2" margin="0">
                11
              </Heading>
              <Text color="secondary" size="small">
                Points pending review
              </Text>
            </Flex>
          </Flex.Item>
        </Flex>

        <Alert variant="info" margin="0 0 medium 0">
          2 items are awaiting instructor review (Essay and File Upload). Your final score updates
          once they’re graded.
        </Alert>

        <Flex direction="column" gap="small">
          <Flex gap="small" alignItems="center">
            <Pill color="success">Auto-graded</Pill>
            <Text>30 of 38 points · final</Text>
          </Flex>
          <Flex gap="small" alignItems="center">
            <Pill>Pending review</Pill>
            <Text>11 points · Essay, File Upload</Text>
          </Flex>
        </Flex>
      </View>
    </View>
  )
}
`,w=`import React from 'react'
import { View } from '@instructure/ui-view/latest'
import { Flex } from '@instructure/ui-flex/latest'
import { Heading } from '@instructure/ui-heading/latest'
import { Text } from '@instructure/ui-text/latest'
import { CheckCircleInstUIIcon, XInstUIIcon } from '@instructure/ui-icons'
import type { FrameCtx } from '../../../components/SpecSheet'

// Question-list result-view combinations. Each instructor toggle stacks on the
// last; these are the six meaningful combinations students can be shown.
export function resultsQuestionViews({ sharedTokens }: FrameCtx): React.ReactNode {
  const card = {
    as: 'div' as const,
    display: 'block' as const,
    background: 'secondary' as const,
    themeOverride: { backgroundSecondary: sharedTokens.background.pageColor },
    borderRadius: sharedTokens.borderRadius.card.md,
  }

  function shell(toggles: string, body: React.ReactNode) {
    return (
      <View as="div" display="block" margin="0 0 medium 0">
        <Text weight="bold" size="small" color="secondary">
          {toggles}
        </Text>
        <View {...card} padding="small medium" margin="xxx-small 0 0 0">
          {body}
        </View>
      </View>
    )
  }

  const prompt = <Text as="p">Which organelle is the powerhouse of the cell?</Text>
  const ok = (
    <Text color="success">
      <CheckCircleInstUIIcon />
    </Text>
  )
  const no = (
    <Text color="danger">
      <XInstUIIcon />
    </Text>
  )

  return (
    <View
      as="div"
      width="100%"
      display="block"
      background="primary"
      themeOverride={{ backgroundPrimary: sharedTokens.background.containerColor }}
      padding="medium"
    >
      <Heading level="h4" margin="0 0 small 0">
        Six meaningful result-view combinations
      </Heading>

      {shell('Questions: Off', <Text color="secondary">No question list shown at all.</Text>)}

      {shell('Questions on · Responses off', prompt)}

      {shell(
        'Questions on · Responses on',
        <Flex direction="column" gap="xxx-small">
          {prompt}
          <Text>Your answer: Mitochondria</Text>
        </Flex>,
      )}

      {shell(
        'Questions on · Responses on · Correct/Incorrect on',
        <Flex direction="column" gap="xxx-small">
          {prompt}
          <Flex gap="x-small" alignItems="center">
            {ok}
            <Text>Mitochondria (your answer)</Text>
          </Flex>
        </Flex>,
      )}

      {shell(
        '+ Correct answer revealed',
        <Flex direction="column" gap="xxx-small">
          {prompt}
          <Flex gap="x-small" alignItems="center">
            {no}
            <Text>Ribosome (your answer)</Text>
          </Flex>
          <Flex gap="x-small" alignItems="center">
            {ok}
            <Text color="success" weight="bold">
              Mitochondria (correct answer)
            </Text>
          </Flex>
        </Flex>,
      )}

      {shell(
        '+ Answer feedback on (full detail)',
        <Flex direction="column" gap="x-small">
          {prompt}
          <Flex gap="x-small" alignItems="center">
            {ok}
            <Text>Mitochondria (your answer)</Text>
          </Flex>
          <View
            as="div"
            display="block"
            background="primary"
            themeOverride={{ backgroundPrimary: sharedTokens.background.containerColor }}
            borderRadius={sharedTokens.borderRadius.card.md}
            padding="x-small small"
          >
            <Text size="small" color="secondary">
              Feedback: Mitochondria produce ATP through cellular respiration — the cell’s main
              energy source.
            </Text>
          </View>
        </Flex>,
      )}
    </View>
  )
}
`,T=`import React from 'react'
import { View } from '@instructure/ui-view/latest'
import { Flex } from '@instructure/ui-flex/latest'
import { Heading } from '@instructure/ui-heading/latest'
import { Text } from '@instructure/ui-text/latest'
import type { FrameCtx } from '../../../components/SpecSheet'

// The score-summary matrix: grading state crossed with the two visibility
// toggles (Show Points Awarded, Show Points Possible) produces 12 variants.
export function resultsScoreStates({ sharedTokens }: FrameCtx): React.ReactNode {
  type Row = { awarded: string; possible: string; shows: string }
  const groups: { state: string; rows: Row[] }[] = [
    {
      state: 'Fully graded',
      rows: [
        { awarded: 'On', possible: 'On', shows: 'You earned 45 of 100 points' },
        { awarded: 'On', possible: 'Off', shows: 'You earned 45 points' },
        { awarded: 'Off', possible: 'On', shows: 'This quiz is worth 100 points' },
        { awarded: 'Off', possible: 'Off', shows: 'Submission confirmed, no score' },
      ],
    },
    {
      state: 'Partially graded',
      rows: [
        { awarded: 'On', possible: 'On', shows: 'So far, you earned 45 of 100 + potential range' },
        { awarded: 'On', possible: 'Off', shows: 'So far, you earned 45 points + potential range' },
        { awarded: 'Off', possible: 'On', shows: 'This quiz is worth 100 points + pending notice' },
        { awarded: 'Off', possible: 'Off', shows: 'Score pending — no numbers' },
      ],
    },
    {
      state: 'Fully pending (all manual)',
      rows: [
        { awarded: 'On', possible: 'On', shows: 'Your score is being graded' },
        { awarded: 'On', possible: 'Off', shows: 'Your score is being graded (no total)' },
        { awarded: 'Off', possible: 'On', shows: 'Your score is being graded (no earned)' },
        { awarded: 'Off', possible: 'Off', shows: 'Submission confirmed only' },
      ],
    },
  ]

  const headerCell = {
    as: 'div' as const,
    display: 'block' as const,
    background: 'secondary' as const,
    themeOverride: { backgroundSecondary: sharedTokens.background.pageColor },
  }

  return (
    <View
      as="div"
      width="100%"
      display="block"
      background="primary"
      themeOverride={{ backgroundPrimary: sharedTokens.background.containerColor }}
      padding="medium"
    >
      {/* Column headers */}
      <View {...headerCell} padding="x-small small" margin="0 0 x-small 0">
        <Flex gap="small">
          <Flex.Item size="6rem">
            <Text weight="bold" size="small">
              Awarded
            </Text>
          </Flex.Item>
          <Flex.Item size="6rem">
            <Text weight="bold" size="small">
              Possible
            </Text>
          </Flex.Item>
          <Flex.Item shouldGrow shouldShrink>
            <Text weight="bold" size="small">
              What the student sees
            </Text>
          </Flex.Item>
        </Flex>
      </View>

      {groups.map((g) => (
        <View key={g.state} as="div" display="block" margin="0 0 medium 0">
          <Heading level="h4" margin="small 0 x-small 0">
            {g.state}
          </Heading>
          {g.rows.map((r, i) => (
            <View
              key={r.awarded + r.possible}
              as="div"
              display="block"
              borderWidth={i === g.rows.length - 1 ? '0' : '0 0 small 0'}
              padding="x-small small"
            >
              <Flex gap="small" alignItems="center">
                <Flex.Item size="6rem">
                  <Text size="small" color={r.awarded === 'On' ? 'primary' : 'secondary'}>
                    {r.awarded}
                  </Text>
                </Flex.Item>
                <Flex.Item size="6rem">
                  <Text size="small" color={r.possible === 'On' ? 'primary' : 'secondary'}>
                    {r.possible}
                  </Text>
                </Flex.Item>
                <Flex.Item shouldGrow shouldShrink>
                  <Text>{r.shows}</Text>
                </Flex.Item>
              </Flex>
            </View>
          ))}
        </View>
      ))}

      <Text size="small" color="secondary">
        “Display grades as” (points, percentage, letter grade, GPA scale) applies on top of any row
        where a score number is visible.
      </Text>
    </View>
  )
}
`,E=`import React from 'react'
import { View } from '@instructure/ui-view/latest'
import { Flex } from '@instructure/ui-flex/latest'
import { Text } from '@instructure/ui-text/latest'
import { Button } from '@instructure/ui-buttons/latest'
import { Pill } from '@instructure/ui-pill/latest'
import { ProgressBar } from '@instructure/ui-progress/latest'
import { RadioInput, RadioInputGroup } from '@instructure/ui-radio-input/latest'
import { ClockInstUIIcon } from '@instructure/ui-icons'
import type { FrameCtx } from '../../../components/SpecSheet'

// Quiz-taking, "one question at a time" ON with backtracking allowed: a single
// question, a "Question X of Y" counter, progress, and Previous + Next.
export function takingOneAtATime({ sharedTokens }: FrameCtx): React.ReactNode {
  const page = {
    as: 'div' as const,
    width: '100%' as const,
    height: '100%' as const,
    display: 'block' as const,
    background: 'secondary' as const,
    themeOverride: { backgroundSecondary: sharedTokens.background.pageColor },
    padding: 'large' as const,
    overflowX: 'hidden' as const,
    overflowY: 'auto' as const,
  }
  const card = {
    as: 'div' as const,
    display: 'block' as const,
    background: 'primary' as const,
    themeOverride: { backgroundPrimary: sharedTokens.background.containerColor },
    borderRadius: sharedTokens.borderRadius.card.lg,
    shadow: 'resting' as const,
  }

  return (
    <View {...page}>
      <View as="div" maxWidth="46rem" display="block" margin="0 auto" width="100%">
        {/* Counter + timer */}
        <Flex justifyItems="space-between" alignItems="center" margin="0 0 small 0" wrap="wrap" gap="small">
          <Flex.Item>
            <Text weight="bold">Question 3 of 13</Text>
          </Flex.Item>
          <Flex.Item>
            <Flex gap="x-small" alignItems="center">
              <Text color="secondary">
                <ClockInstUIIcon />
              </Text>
              <Text weight="bold">12:40 remaining</Text>
            </Flex>
          </Flex.Item>
        </Flex>

        <View as="div" display="block" margin="0 0 medium 0">
          <ProgressBar
            screenReaderLabel="Quiz progress"
            valueNow={3}
            valueMax={13}
            size="x-small"
          />
        </View>

        <View {...card} padding="large">
          <Flex gap="small" alignItems="center" margin="0 0 medium 0">
            <Pill>Multiple Answer</Pill>
            <Text color="secondary" size="small">
              4 points
            </Text>
          </Flex>
          <RadioInputGroup
            name="q3"
            defaultValue="bacteria"
            description={<Text as="p">Which of the following are single-celled organisms?</Text>}
          >
            <RadioInput label="Bacteria" value="bacteria" />
            <RadioInput label="Amoeba" value="amoeba" />
            <RadioInput label="Oak tree" value="oak" />
            <RadioInput label="Yeast" value="yeast" />
          </RadioInputGroup>
        </View>

        <Flex justifyItems="space-between" margin="medium 0 0 0">
          <Flex.Item>
            <Button>Previous</Button>
          </Flex.Item>
          <Flex.Item>
            <Button color="primary">Next</Button>
          </Flex.Item>
        </Flex>
      </View>
    </View>
  )
}
`,D=`import React from 'react'
import { View } from '@instructure/ui-view/latest'
import { Flex } from '@instructure/ui-flex/latest'
import { Heading } from '@instructure/ui-heading/latest'
import { Text } from '@instructure/ui-text/latest'
import { Button } from '@instructure/ui-buttons/latest'
import { Pill } from '@instructure/ui-pill/latest'
import { RadioInput, RadioInputGroup } from '@instructure/ui-radio-input/latest'
import { Checkbox } from '@instructure/ui-checkbox/latest'
import { ClockInstUIIcon, RocketInstUIIcon } from '@instructure/ui-icons'
import type { FrameCtx } from '../../../components/SpecSheet'

// Quiz-taking, "one question at a time" OFF: every question on a single
// scrollable page with a sticky question rail and a Submit at the bottom.
export function takingOnePage({ sharedTokens }: FrameCtx): React.ReactNode {
  const page = {
    as: 'div' as const,
    width: '100%' as const,
    height: '100%' as const,
    display: 'block' as const,
    background: 'secondary' as const,
    themeOverride: { backgroundSecondary: sharedTokens.background.pageColor },
    padding: 'large' as const,
    overflowX: 'hidden' as const,
    overflowY: 'auto' as const,
  }
  const card = {
    as: 'div' as const,
    display: 'block' as const,
    background: 'primary' as const,
    themeOverride: { backgroundPrimary: sharedTokens.background.containerColor },
    borderRadius: sharedTokens.borderRadius.card.lg,
    shadow: 'resting' as const,
  }

  function badge(n: number, filled: boolean) {
    return (
      <View
        as="div"
        display="inline-block"
        background={filled ? 'brand' : 'secondary'}
        themeOverride={
          filled
            ? { backgroundBrand: sharedTokens.background.brandColor }
            : { backgroundSecondary: sharedTokens.background.pageColor }
        }
        borderRadius={sharedTokens.borderRadius.card.md}
        padding="xxx-small x-small"
      >
        <Text color={filled ? 'primary-inverse' : 'secondary'} weight="bold">
          {n}
        </Text>
      </View>
    )
  }

  function head(n: number, type: string, pts: number) {
    return (
      <Flex gap="small" alignItems="center" margin="0 0 medium 0">
        {badge(n, true)}
        <Pill>{type}</Pill>
        <Text color="secondary" size="small">
          {pts} points
        </Text>
      </Flex>
    )
  }

  return (
    <View {...page}>
      <Flex alignItems="start" gap="medium">
        <Flex.Item>
          <Flex direction="column" gap="x-small">
            {[1, 2, 3].map((n) => (
              <View key={n} as="div" padding="xxx-small">
                {badge(n, n < 3)}
              </View>
            ))}
          </Flex>
        </Flex.Item>
        <Flex.Item shouldGrow shouldShrink>
          <View as="div" maxWidth="48rem" display="block" margin="0 auto" width="100%">
            {/* Header with timer */}
            <Flex justifyItems="space-between" alignItems="center" wrap="wrap" gap="small" margin="0 0 medium 0">
              <Flex.Item shouldGrow shouldShrink>
                <Heading level="h1" variant="titlePageDesktop" margin="0">
                  Introduction to Biology — Quiz 1
                </Heading>
              </Flex.Item>
              <Flex.Item>
                <View
                  as="div"
                  display="inline-block"
                  background="secondary"
                  themeOverride={{ backgroundSecondary: sharedTokens.background.pageColor }}
                  borderRadius={sharedTokens.borderRadius.card.md}
                  padding="x-small small"
                >
                  <Flex gap="x-small" alignItems="center">
                    <Text color="secondary">
                      <ClockInstUIIcon />
                    </Text>
                    <Text weight="bold">No time limit</Text>
                  </Flex>
                </View>
              </Flex.Item>
            </Flex>

            <Flex direction="column" gap="medium">
              <View {...card} padding="large">
                {head(1, 'Multiple Choice', 5)}
                <RadioInputGroup
                  name="q1"
                  defaultValue="mitochondria"
                  description={<Text as="p">Which organelle is known as the powerhouse of the cell?</Text>}
                >
                  <RadioInput label="Nucleus" value="nucleus" />
                  <RadioInput label="Ribosome" value="ribosome" />
                  <RadioInput label="Mitochondria" value="mitochondria" />
                  <RadioInput label="Golgi apparatus" value="golgi" />
                </RadioInputGroup>
              </View>

              <View {...card} padding="large">
                {head(2, 'True or False', 3)}
                <RadioInputGroup
                  name="q2"
                  defaultValue="true"
                  description={<Text as="p">DNA is made up of four nucleotide bases.</Text>}
                >
                  <RadioInput label="True" value="true" />
                  <RadioInput label="False" value="false" />
                </RadioInputGroup>
              </View>

              <View {...card} padding="large">
                {head(3, 'Multiple Answer', 4)}
                <Flex direction="column" gap="x-small">
                  <Text as="p">Which of the following are single-celled organisms? Select all that apply.</Text>
                  <Checkbox label="Bacteria" value="bacteria" defaultChecked />
                  <Checkbox label="Amoeba" value="amoeba" />
                  <Checkbox label="Oak tree" value="oak" />
                  <Checkbox label="Yeast" value="yeast" />
                </Flex>
              </View>

              <Flex justifyItems="end">
                <Button color="success" renderIcon={<RocketInstUIIcon />}>
                  Submit quiz
                </Button>
              </Flex>
            </Flex>
          </View>
        </Flex.Item>
      </Flex>
    </View>
  )
}
`,O=`import React from 'react'
import { View } from '@instructure/ui-view/latest'
import { Flex } from '@instructure/ui-flex/latest'
import { Heading } from '@instructure/ui-heading/latest'
import { Text } from '@instructure/ui-text/latest'
import { Button } from '@instructure/ui-buttons/latest'
import { Alert } from '@instructure/ui-alerts/latest'
import { RocketInstUIIcon } from '@instructure/ui-icons'
import type { FrameCtx } from '../../../components/SpecSheet'

// Two-step submission (Finish → Confirm Submit) with the unanswered-questions
// warning shown before the student commits.
export function takingSubmit({ sharedTokens }: FrameCtx): React.ReactNode {
  const card = {
    as: 'div' as const,
    display: 'block' as const,
    background: 'primary' as const,
    themeOverride: { backgroundPrimary: sharedTokens.background.containerColor },
    borderRadius: sharedTokens.borderRadius.card.lg,
    shadow: 'resting' as const,
  }

  return (
    <View
      as="div"
      width="100%"
      display="block"
      background="secondary"
      themeOverride={{ backgroundSecondary: sharedTokens.background.pageColor }}
      padding="large"
    >
      <View {...card} padding="large" maxWidth="34rem">
        <Heading level="h2" margin="0 0 small 0">
          Submit your quiz?
        </Heading>
        <Text as="p" color="secondary">
          Once you submit, you can’t change your answers for this attempt.
        </Text>

        <View as="div" display="block" margin="medium 0">
          <Alert variant="warning" margin="0">
            2 questions are unanswered (questions 7 and 11). They’ll be marked as incorrect.
          </Alert>
        </View>

        <Flex gap="small" justifyItems="end">
          <Flex.Item>
            <Button>Keep working</Button>
          </Flex.Item>
          <Flex.Item>
            <Button color="success" renderIcon={<RocketInstUIIcon />}>
              Submit quiz
            </Button>
          </Flex.Item>
        </Flex>
      </View>
    </View>
  )
}
`;r();var k=e(n(),1);function A({sharedTokens:e}){let t={as:`div`,width:`100%`,height:`100%`,display:`block`,background:`secondary`,themeOverride:{backgroundSecondary:e.background.pageColor},padding:`large`,overflowX:`hidden`,overflowY:`auto`},n={as:`div`,display:`block`,background:`primary`,themeOverride:{backgroundPrimary:e.background.containerColor},borderRadius:e.borderRadius.card.lg,shadow:`resting`},r={as:`div`,display:`block`,background:`secondary`,themeOverride:{backgroundSecondary:e.background.pageColor},borderRadius:e.borderRadius.card.md};function l(e,t){return(0,k.jsx)(c.Item,{children:(0,k.jsxs)(c,{direction:`column`,children:[(0,k.jsx)(s,{level:`h2`,margin:`0`,children:e}),(0,k.jsx)(o,{color:`secondary`,size:`small`,children:t})]})})}return(0,k.jsx)(i,{...t,children:(0,k.jsx)(i,{as:`div`,maxWidth:`56rem`,display:`block`,margin:`0 auto`,width:`100%`,children:(0,k.jsxs)(i,{...n,padding:`large`,children:[(0,k.jsx)(s,{level:`h1`,variant:`titlePageDesktop`,margin:`0 0 large 0`,children:`Introduction to Biology — Quiz 1`}),(0,k.jsxs)(c,{gap:`x-large`,alignItems:`end`,margin:`0 0 large 0`,wrap:`wrap`,children:[l(`No Time Limit`,`Time limit`),l(`6/28/2026 7:59 AM`,`Due`),l(`48`,`Points`),l(`3`,`Allowed attempts`)]}),(0,k.jsxs)(i,{...r,padding:`medium`,margin:`0 0 large 0`,children:[(0,k.jsx)(s,{level:`h3`,margin:`0 0 x-small 0`,children:`Instructions`}),(0,k.jsx)(o,{as:`p`,children:`This quiz covers cell structure, genetics, and cell division. Answer every question to the best of your ability. Essay and file upload responses are reviewed by your instructor after you submit.`})]}),(0,k.jsx)(s,{level:`h3`,margin:`0 0 small 0`,children:`Attempt history`}),(0,k.jsxs)(i,{...r,padding:`0`,margin:`0 0 large 0`,children:[(0,k.jsxs)(c,{padding:`x-small medium`,gap:`medium`,children:[(0,k.jsx)(c.Item,{size:`8rem`,children:(0,k.jsx)(o,{weight:`bold`,size:`small`,color:`secondary`,children:`Attempt`})}),(0,k.jsx)(c.Item,{shouldGrow:!0,shouldShrink:!0,children:(0,k.jsx)(o,{weight:`bold`,size:`small`,color:`secondary`,children:`Submitted`})}),(0,k.jsx)(c.Item,{size:`8rem`,children:(0,k.jsx)(o,{weight:`bold`,size:`small`,color:`secondary`,children:`Score`})})]}),(0,k.jsx)(i,{as:`div`,display:`block`,borderWidth:`small 0 0 0`,padding:`small medium`,children:(0,k.jsxs)(c,{gap:`medium`,alignItems:`center`,children:[(0,k.jsx)(c.Item,{size:`8rem`,children:(0,k.jsx)(o,{color:`brand`,weight:`bold`,children:`Attempt 1`})}),(0,k.jsx)(c.Item,{shouldGrow:!0,shouldShrink:!0,children:(0,k.jsx)(o,{children:`Jun 20 at 4:12 PM`})}),(0,k.jsx)(c.Item,{size:`8rem`,children:(0,k.jsx)(o,{children:`41 of 48 pts`})})]})})]}),(0,k.jsxs)(c,{gap:`small`,alignItems:`center`,wrap:`wrap`,children:[(0,k.jsx)(a,{color:`primary`,children:`Begin`}),(0,k.jsx)(h,{children:`2 attempts remaining`}),(0,k.jsx)(o,{color:`secondary`,size:`small`,children:`Highest score is kept`})]})]})})})}function j({sharedTokens:e}){let t=[{label:`Active`,rule:`Quiz open, attempts remaining, no cooldown, no access code`,render:(0,k.jsx)(a,{color:`primary`,children:`Begin`})},{label:`Locked — not open yet`,rule:`Before the Available From date`,render:(0,k.jsx)(a,{color:`primary`,interaction:`disabled`,children:`Available Jun 30 at 8:00 AM`})},{label:`Locked — closed`,rule:`After the Until date`,render:(0,k.jsx)(a,{color:`primary`,interaction:`disabled`,children:`Quiz closed`})},{label:`Locked — no attempts left`,rule:`All allowed attempts used`,render:(0,k.jsx)(a,{color:`primary`,interaction:`disabled`,children:`No attempts remaining`})},{label:`Locked — cooldown active`,rule:`Time between attempts has not elapsed`,render:(0,k.jsx)(a,{color:`primary`,interaction:`disabled`,children:`Next attempt available 3:30 PM`})},{label:`Locked — access code required`,rule:`Code required but not yet entered`,render:(0,k.jsx)(a,{color:`primary`,interaction:`disabled`,children:`Begin`})}];return(0,k.jsx)(i,{as:`div`,width:`100%`,display:`block`,background:`secondary`,themeOverride:{backgroundSecondary:e.background.pageColor},padding:`medium`,children:(0,k.jsx)(c,{direction:`column`,gap:`0`,children:t.map((e,n)=>(0,k.jsx)(i,{as:`div`,display:`block`,borderWidth:n===t.length-1?`0`:`0 0 small 0`,padding:`small 0`,children:(0,k.jsxs)(c,{gap:`large`,alignItems:`center`,wrap:`wrap`,children:[(0,k.jsx)(c.Item,{size:`16rem`,children:e.render}),(0,k.jsx)(c.Item,{shouldGrow:!0,shouldShrink:!0,children:(0,k.jsxs)(c,{direction:`column`,gap:`xxx-small`,children:[(0,k.jsx)(s,{level:`h4`,margin:`0`,children:e.label}),(0,k.jsx)(o,{color:`secondary`,size:`small`,children:e.rule})]})})]})},e.label))})})}function M({sharedTokens:e}){let t={as:`div`,width:`100%`,height:`100%`,display:`block`,background:`secondary`,themeOverride:{backgroundSecondary:e.background.pageColor},padding:`large`,overflowX:`hidden`,overflowY:`auto`},n={as:`div`,display:`block`,background:`primary`,themeOverride:{backgroundPrimary:e.background.containerColor},borderRadius:e.borderRadius.card.lg,shadow:`resting`};function r(t,n){return(0,k.jsx)(i,{as:`div`,display:`inline-block`,background:n?`brand`:`secondary`,themeOverride:n?{backgroundBrand:e.background.brandColor}:{backgroundSecondary:e.background.pageColor},borderRadius:e.borderRadius.card.md,padding:`xxx-small x-small`,children:(0,k.jsx)(o,{color:n?`primary-inverse`:`secondary`,weight:`bold`,children:t})})}function u(e,t,n){return(0,k.jsxs)(c,{gap:`small`,alignItems:`center`,margin:`0 0 medium 0`,children:[r(e,!0),(0,k.jsx)(h,{children:t}),(0,k.jsxs)(o,{color:`secondary`,size:`small`,children:[n,` points`]})]})}return(0,k.jsx)(i,{...t,children:(0,k.jsxs)(c,{alignItems:`start`,gap:`medium`,children:[(0,k.jsx)(c.Item,{children:(0,k.jsx)(c,{direction:`column`,gap:`x-small`,children:[1,2,3].map(e=>(0,k.jsx)(i,{as:`div`,padding:`xxx-small`,children:r(e,e<3)},e))})}),(0,k.jsx)(c.Item,{shouldGrow:!0,shouldShrink:!0,children:(0,k.jsxs)(i,{as:`div`,maxWidth:`48rem`,display:`block`,margin:`0 auto`,width:`100%`,children:[(0,k.jsxs)(c,{justifyItems:`space-between`,alignItems:`center`,wrap:`wrap`,gap:`small`,margin:`0 0 medium 0`,children:[(0,k.jsx)(c.Item,{shouldGrow:!0,shouldShrink:!0,children:(0,k.jsx)(s,{level:`h1`,variant:`titlePageDesktop`,margin:`0`,children:`Introduction to Biology — Quiz 1`})}),(0,k.jsx)(c.Item,{children:(0,k.jsx)(i,{as:`div`,display:`inline-block`,background:`secondary`,themeOverride:{backgroundSecondary:e.background.pageColor},borderRadius:e.borderRadius.card.md,padding:`x-small small`,children:(0,k.jsxs)(c,{gap:`x-small`,alignItems:`center`,children:[(0,k.jsx)(o,{color:`secondary`,children:(0,k.jsx)(l,{})}),(0,k.jsx)(o,{weight:`bold`,children:`No time limit`})]})})})]}),(0,k.jsxs)(c,{direction:`column`,gap:`medium`,children:[(0,k.jsxs)(i,{...n,padding:`large`,children:[u(1,`Multiple Choice`,5),(0,k.jsxs)(v,{name:`q1`,defaultValue:`mitochondria`,description:(0,k.jsx)(o,{as:`p`,children:`Which organelle is known as the powerhouse of the cell?`}),children:[(0,k.jsx)(_,{label:`Nucleus`,value:`nucleus`}),(0,k.jsx)(_,{label:`Ribosome`,value:`ribosome`}),(0,k.jsx)(_,{label:`Mitochondria`,value:`mitochondria`}),(0,k.jsx)(_,{label:`Golgi apparatus`,value:`golgi`})]})]}),(0,k.jsxs)(i,{...n,padding:`large`,children:[u(2,`True or False`,3),(0,k.jsxs)(v,{name:`q2`,defaultValue:`true`,description:(0,k.jsx)(o,{as:`p`,children:`DNA is made up of four nucleotide bases.`}),children:[(0,k.jsx)(_,{label:`True`,value:`true`}),(0,k.jsx)(_,{label:`False`,value:`false`})]})]}),(0,k.jsxs)(i,{...n,padding:`large`,children:[u(3,`Multiple Answer`,4),(0,k.jsxs)(c,{direction:`column`,gap:`x-small`,children:[(0,k.jsx)(o,{as:`p`,children:`Which of the following are single-celled organisms? Select all that apply.`}),(0,k.jsx)(m,{label:`Bacteria`,value:`bacteria`,defaultChecked:!0}),(0,k.jsx)(m,{label:`Amoeba`,value:`amoeba`}),(0,k.jsx)(m,{label:`Oak tree`,value:`oak`}),(0,k.jsx)(m,{label:`Yeast`,value:`yeast`})]})]}),(0,k.jsx)(c,{justifyItems:`end`,children:(0,k.jsx)(a,{color:`success`,renderIcon:(0,k.jsx)(d,{}),children:`Submit quiz`})})]})]})})]})})}function N({sharedTokens:e}){let t={as:`div`,width:`100%`,height:`100%`,display:`block`,background:`secondary`,themeOverride:{backgroundSecondary:e.background.pageColor},padding:`large`,overflowX:`hidden`,overflowY:`auto`},n={as:`div`,display:`block`,background:`primary`,themeOverride:{backgroundPrimary:e.background.containerColor},borderRadius:e.borderRadius.card.lg,shadow:`resting`};return(0,k.jsx)(i,{...t,children:(0,k.jsxs)(i,{as:`div`,maxWidth:`46rem`,display:`block`,margin:`0 auto`,width:`100%`,children:[(0,k.jsxs)(c,{justifyItems:`space-between`,alignItems:`center`,margin:`0 0 small 0`,wrap:`wrap`,gap:`small`,children:[(0,k.jsx)(c.Item,{children:(0,k.jsx)(o,{weight:`bold`,children:`Question 3 of 13`})}),(0,k.jsx)(c.Item,{children:(0,k.jsxs)(c,{gap:`x-small`,alignItems:`center`,children:[(0,k.jsx)(o,{color:`secondary`,children:(0,k.jsx)(l,{})}),(0,k.jsx)(o,{weight:`bold`,children:`12:40 remaining`})]})})]}),(0,k.jsx)(i,{as:`div`,display:`block`,margin:`0 0 medium 0`,children:(0,k.jsx)(g,{screenReaderLabel:`Quiz progress`,valueNow:3,valueMax:13,size:`x-small`})}),(0,k.jsxs)(i,{...n,padding:`large`,children:[(0,k.jsxs)(c,{gap:`small`,alignItems:`center`,margin:`0 0 medium 0`,children:[(0,k.jsx)(h,{children:`Multiple Answer`}),(0,k.jsx)(o,{color:`secondary`,size:`small`,children:`4 points`})]}),(0,k.jsxs)(v,{name:`q3`,defaultValue:`bacteria`,description:(0,k.jsx)(o,{as:`p`,children:`Which of the following are single-celled organisms?`}),children:[(0,k.jsx)(_,{label:`Bacteria`,value:`bacteria`}),(0,k.jsx)(_,{label:`Amoeba`,value:`amoeba`}),(0,k.jsx)(_,{label:`Oak tree`,value:`oak`}),(0,k.jsx)(_,{label:`Yeast`,value:`yeast`})]})]}),(0,k.jsxs)(c,{justifyItems:`space-between`,margin:`medium 0 0 0`,children:[(0,k.jsx)(c.Item,{children:(0,k.jsx)(a,{children:`Previous`})}),(0,k.jsx)(c.Item,{children:(0,k.jsx)(a,{color:`primary`,children:`Next`})})]})]})})}function P({sharedTokens:e}){let t={as:`div`,display:`block`,background:`primary`,themeOverride:{backgroundPrimary:e.background.containerColor},borderRadius:e.borderRadius.card.lg,shadow:`resting`};return(0,k.jsx)(i,{as:`div`,width:`100%`,display:`block`,background:`secondary`,themeOverride:{backgroundSecondary:e.background.pageColor},padding:`large`,children:(0,k.jsxs)(i,{...t,padding:`large`,maxWidth:`34rem`,children:[(0,k.jsx)(s,{level:`h2`,margin:`0 0 small 0`,children:`Submit your quiz?`}),(0,k.jsx)(o,{as:`p`,color:`secondary`,children:`Once you submit, you can’t change your answers for this attempt.`}),(0,k.jsx)(i,{as:`div`,display:`block`,margin:`medium 0`,children:(0,k.jsx)(p,{variant:`warning`,margin:`0`,children:`2 questions are unanswered (questions 7 and 11). They’ll be marked as incorrect.`})}),(0,k.jsxs)(c,{gap:`small`,justifyItems:`end`,children:[(0,k.jsx)(c.Item,{children:(0,k.jsx)(a,{children:`Keep working`})}),(0,k.jsx)(c.Item,{children:(0,k.jsx)(a,{color:`success`,renderIcon:(0,k.jsx)(d,{}),children:`Submit quiz`})})]})]})})}function F({sharedTokens:e}){let t={as:`div`,width:`100%`,height:`100%`,display:`block`,background:`secondary`,themeOverride:{backgroundSecondary:e.background.pageColor},padding:`large`,overflowX:`hidden`,overflowY:`auto`},n={as:`div`,display:`block`,background:`primary`,themeOverride:{backgroundPrimary:e.background.containerColor},borderRadius:e.borderRadius.card.lg,shadow:`resting`};function r(e,t,n){let r=t===null?`secondary`:t?`success`:`danger`;return(0,k.jsxs)(c,{gap:`x-small`,alignItems:`center`,children:[t!==null&&(0,k.jsx)(o,{color:r,children:t?(0,k.jsx)(u,{}):(0,k.jsx)(f,{})}),(0,k.jsx)(o,{color:r,weight:t?`bold`:`normal`,children:e}),n&&(0,k.jsx)(o,{size:`small`,color:`secondary`,children:n})]})}return(0,k.jsx)(i,{...t,children:(0,k.jsx)(i,{as:`div`,maxWidth:`56rem`,display:`block`,margin:`0 auto`,width:`100%`,children:(0,k.jsxs)(i,{...n,padding:`large`,children:[(0,k.jsx)(s,{level:`h1`,variant:`titlePageDesktop`,margin:`0`,children:`Results`}),(0,k.jsx)(o,{as:`p`,color:`secondary`,children:`Balazs Student · Introduction to Biology — Quiz 1`}),(0,k.jsxs)(c,{gap:`x-large`,alignItems:`center`,margin:`large 0`,wrap:`wrap`,children:[(0,k.jsx)(c.Item,{children:(0,k.jsx)(i,{as:`div`,display:`block`,borderWidth:`large`,borderColor:`success`,borderRadius:`circle`,padding:`medium`,width:`6rem`,height:`6rem`,textAlign:`center`,children:(0,k.jsx)(c,{height:`100%`,alignItems:`center`,justifyItems:`center`,children:(0,k.jsx)(s,{level:`h2`,margin:`0`,children:`85%`})})})}),(0,k.jsx)(c.Item,{children:(0,k.jsxs)(c,{direction:`column`,children:[(0,k.jsx)(s,{level:`h2`,margin:`0`,children:`41 of 48`}),(0,k.jsx)(o,{color:`secondary`,size:`small`,children:`Points earned`})]})})]}),(0,k.jsx)(s,{level:`h2`,variant:`titleCardRegular`,margin:`0 0 small 0`,children:`Your answers`}),(0,k.jsxs)(c,{direction:`column`,children:[(0,k.jsxs)(i,{as:`div`,display:`block`,borderWidth:`0 0 small 0`,padding:`medium 0`,children:[(0,k.jsxs)(c,{gap:`small`,alignItems:`center`,margin:`0 0 small 0`,children:[(0,k.jsx)(h,{children:`Multiple Choice`}),(0,k.jsx)(o,{weight:`bold`,color:`success`,children:`5 / 5 points`})]}),(0,k.jsx)(o,{as:`p`,children:`Which organelle is known as the powerhouse of the cell?`}),r(`Mitochondria`,!0,`(your answer)`)]}),(0,k.jsxs)(i,{as:`div`,display:`block`,borderWidth:`0 0 small 0`,padding:`medium 0`,children:[(0,k.jsxs)(c,{gap:`small`,alignItems:`center`,margin:`0 0 small 0`,children:[(0,k.jsx)(h,{children:`Fill in the Blank`}),(0,k.jsx)(o,{weight:`bold`,color:`danger`,children:`0 / 4 points`})]}),(0,k.jsx)(o,{as:`p`,children:`The process by which plants convert sunlight into energy is called ______.`}),r(`photosynthsis`,!1,`(your answer)`),(0,k.jsx)(i,{as:`div`,display:`block`,margin:`xxx-small 0 0 0`,children:(0,k.jsxs)(o,{size:`small`,color:`secondary`,children:[`Accepted answer:`,` `,(0,k.jsx)(o,{size:`small`,weight:`bold`,children:`photosynthesis`})]})})]}),(0,k.jsxs)(i,{as:`div`,display:`block`,padding:`medium 0`,children:[(0,k.jsxs)(c,{gap:`small`,alignItems:`center`,margin:`0 0 small 0`,children:[(0,k.jsx)(h,{children:`Ordering`}),(0,k.jsx)(o,{weight:`bold`,color:`success`,children:`3 / 3 points`})]}),(0,k.jsx)(o,{as:`p`,children:`Place the stages of mitosis in the correct order.`}),(0,k.jsxs)(c,{direction:`column`,gap:`xxx-small`,children:[r(`1. Prophase`,!0),r(`2. Metaphase`,!0),r(`3. Anaphase`,!0),r(`4. Telophase`,!0)]})]})]})]})})})}function I({sharedTokens:e}){let t={as:`div`,display:`block`,background:`primary`,themeOverride:{backgroundPrimary:e.background.containerColor},borderRadius:e.borderRadius.card.lg,shadow:`resting`};return(0,k.jsx)(i,{as:`div`,width:`100%`,display:`block`,background:`secondary`,themeOverride:{backgroundSecondary:e.background.pageColor},padding:`large`,children:(0,k.jsxs)(i,{...t,padding:`large`,maxWidth:`46rem`,children:[(0,k.jsx)(s,{level:`h1`,variant:`titlePageDesktop`,margin:`0`,children:`Results`}),(0,k.jsx)(o,{as:`p`,color:`secondary`,children:`Balazs Student · Introduction to Biology — Quiz 1`}),(0,k.jsxs)(c,{gap:`x-large`,alignItems:`center`,margin:`large 0`,wrap:`wrap`,children:[(0,k.jsx)(c.Item,{children:(0,k.jsx)(i,{as:`div`,display:`block`,borderWidth:`large`,borderRadius:`circle`,padding:`medium`,width:`6rem`,height:`6rem`,textAlign:`center`,children:(0,k.jsx)(c,{height:`100%`,alignItems:`center`,justifyItems:`center`,children:(0,k.jsx)(s,{level:`h2`,margin:`0`,children:`79%`})})})}),(0,k.jsx)(c.Item,{children:(0,k.jsxs)(c,{direction:`column`,children:[(0,k.jsx)(s,{level:`h2`,margin:`0`,children:`30 of 38`}),(0,k.jsx)(o,{color:`secondary`,size:`small`,children:`Auto-graded points`})]})}),(0,k.jsx)(c.Item,{children:(0,k.jsxs)(c,{direction:`column`,children:[(0,k.jsx)(s,{level:`h2`,margin:`0`,children:`11`}),(0,k.jsx)(o,{color:`secondary`,size:`small`,children:`Points pending review`})]})})]}),(0,k.jsx)(p,{variant:`info`,margin:`0 0 medium 0`,children:`2 items are awaiting instructor review (Essay and File Upload). Your final score updates once they’re graded.`}),(0,k.jsxs)(c,{direction:`column`,gap:`small`,children:[(0,k.jsxs)(c,{gap:`small`,alignItems:`center`,children:[(0,k.jsx)(h,{color:`success`,children:`Auto-graded`}),(0,k.jsx)(o,{children:`30 of 38 points · final`})]}),(0,k.jsxs)(c,{gap:`small`,alignItems:`center`,children:[(0,k.jsx)(h,{children:`Pending review`}),(0,k.jsx)(o,{children:`11 points · Essay, File Upload`})]})]})]})})}function L({sharedTokens:e}){let t=[{state:`Fully graded`,rows:[{awarded:`On`,possible:`On`,shows:`You earned 45 of 100 points`},{awarded:`On`,possible:`Off`,shows:`You earned 45 points`},{awarded:`Off`,possible:`On`,shows:`This quiz is worth 100 points`},{awarded:`Off`,possible:`Off`,shows:`Submission confirmed, no score`}]},{state:`Partially graded`,rows:[{awarded:`On`,possible:`On`,shows:`So far, you earned 45 of 100 + potential range`},{awarded:`On`,possible:`Off`,shows:`So far, you earned 45 points + potential range`},{awarded:`Off`,possible:`On`,shows:`This quiz is worth 100 points + pending notice`},{awarded:`Off`,possible:`Off`,shows:`Score pending — no numbers`}]},{state:`Fully pending (all manual)`,rows:[{awarded:`On`,possible:`On`,shows:`Your score is being graded`},{awarded:`On`,possible:`Off`,shows:`Your score is being graded (no total)`},{awarded:`Off`,possible:`On`,shows:`Your score is being graded (no earned)`},{awarded:`Off`,possible:`Off`,shows:`Submission confirmed only`}]}],n={as:`div`,display:`block`,background:`secondary`,themeOverride:{backgroundSecondary:e.background.pageColor}};return(0,k.jsxs)(i,{as:`div`,width:`100%`,display:`block`,background:`primary`,themeOverride:{backgroundPrimary:e.background.containerColor},padding:`medium`,children:[(0,k.jsx)(i,{...n,padding:`x-small small`,margin:`0 0 x-small 0`,children:(0,k.jsxs)(c,{gap:`small`,children:[(0,k.jsx)(c.Item,{size:`6rem`,children:(0,k.jsx)(o,{weight:`bold`,size:`small`,children:`Awarded`})}),(0,k.jsx)(c.Item,{size:`6rem`,children:(0,k.jsx)(o,{weight:`bold`,size:`small`,children:`Possible`})}),(0,k.jsx)(c.Item,{shouldGrow:!0,shouldShrink:!0,children:(0,k.jsx)(o,{weight:`bold`,size:`small`,children:`What the student sees`})})]})}),t.map(e=>(0,k.jsxs)(i,{as:`div`,display:`block`,margin:`0 0 medium 0`,children:[(0,k.jsx)(s,{level:`h4`,margin:`small 0 x-small 0`,children:e.state}),e.rows.map((t,n)=>(0,k.jsx)(i,{as:`div`,display:`block`,borderWidth:n===e.rows.length-1?`0`:`0 0 small 0`,padding:`x-small small`,children:(0,k.jsxs)(c,{gap:`small`,alignItems:`center`,children:[(0,k.jsx)(c.Item,{size:`6rem`,children:(0,k.jsx)(o,{size:`small`,color:t.awarded===`On`?`primary`:`secondary`,children:t.awarded})}),(0,k.jsx)(c.Item,{size:`6rem`,children:(0,k.jsx)(o,{size:`small`,color:t.possible===`On`?`primary`:`secondary`,children:t.possible})}),(0,k.jsx)(c.Item,{shouldGrow:!0,shouldShrink:!0,children:(0,k.jsx)(o,{children:t.shows})})]})},t.awarded+t.possible))]},e.state)),(0,k.jsx)(o,{size:`small`,color:`secondary`,children:`“Display grades as” (points, percentage, letter grade, GPA scale) applies on top of any row where a score number is visible.`})]})}function R({sharedTokens:e}){let t={as:`div`,display:`block`,background:`secondary`,themeOverride:{backgroundSecondary:e.background.pageColor},borderRadius:e.borderRadius.card.md};function n(e,n){return(0,k.jsxs)(i,{as:`div`,display:`block`,margin:`0 0 medium 0`,children:[(0,k.jsx)(o,{weight:`bold`,size:`small`,color:`secondary`,children:e}),(0,k.jsx)(i,{...t,padding:`small medium`,margin:`xxx-small 0 0 0`,children:n})]})}let r=(0,k.jsx)(o,{as:`p`,children:`Which organelle is the powerhouse of the cell?`}),a=(0,k.jsx)(o,{color:`success`,children:(0,k.jsx)(u,{})}),l=(0,k.jsx)(o,{color:`danger`,children:(0,k.jsx)(f,{})});return(0,k.jsxs)(i,{as:`div`,width:`100%`,display:`block`,background:`primary`,themeOverride:{backgroundPrimary:e.background.containerColor},padding:`medium`,children:[(0,k.jsx)(s,{level:`h4`,margin:`0 0 small 0`,children:`Six meaningful result-view combinations`}),n(`Questions: Off`,(0,k.jsx)(o,{color:`secondary`,children:`No question list shown at all.`})),n(`Questions on · Responses off`,r),n(`Questions on · Responses on`,(0,k.jsxs)(c,{direction:`column`,gap:`xxx-small`,children:[r,(0,k.jsx)(o,{children:`Your answer: Mitochondria`})]})),n(`Questions on · Responses on · Correct/Incorrect on`,(0,k.jsxs)(c,{direction:`column`,gap:`xxx-small`,children:[r,(0,k.jsxs)(c,{gap:`x-small`,alignItems:`center`,children:[a,(0,k.jsx)(o,{children:`Mitochondria (your answer)`})]})]})),n(`+ Correct answer revealed`,(0,k.jsxs)(c,{direction:`column`,gap:`xxx-small`,children:[r,(0,k.jsxs)(c,{gap:`x-small`,alignItems:`center`,children:[l,(0,k.jsx)(o,{children:`Ribosome (your answer)`})]}),(0,k.jsxs)(c,{gap:`x-small`,alignItems:`center`,children:[a,(0,k.jsx)(o,{color:`success`,weight:`bold`,children:`Mitochondria (correct answer)`})]})]})),n(`+ Answer feedback on (full detail)`,(0,k.jsxs)(c,{direction:`column`,gap:`x-small`,children:[r,(0,k.jsxs)(c,{gap:`x-small`,alignItems:`center`,children:[a,(0,k.jsx)(o,{children:`Mitochondria (your answer)`})]}),(0,k.jsx)(i,{as:`div`,display:`block`,background:`primary`,themeOverride:{backgroundPrimary:e.background.containerColor},borderRadius:e.borderRadius.card.md,padding:`x-small small`,children:(0,k.jsx)(o,{size:`small`,color:`secondary`,children:`Feedback: Mitochondria produce ATP through cellular respiration — the cell’s main energy source.`})})]}))]})}var z=Object.assign({"./frames/launch-begin-states.tsx":b,"./frames/launch-default.tsx":x,"./frames/results-graded.tsx":S,"./frames/results-partial.tsx":C,"./frames/results-question-views.tsx":w,"./frames/results-score-states.tsx":T,"./frames/taking-one-at-a-time.tsx":E,"./frames/taking-one-page.tsx":D,"./frames/taking-submit.tsx":O});function B(e){let{sharedTokens:n}=t(),r={sharedTokens:n};return(0,k.jsx)(y,{title:`Student Experience — Visual Spec`,description:`The unified AMS student assessment experience on the Learnosity player, across all three student-facing surfaces: the launch page, the quiz-taking experience, and the results page. Screens are shown inside the Canvas course content area; global and course navigation are out of scope here. Full variant catalog: projects/AMS Student Experience/inputs/student-view-scenarios.md.`,basePath:`src/designs/student-experience-spec`,frameSources:z,sections:[{title:`Launch page`,description:`Pre-attempt entry point. The header metadata strip, instructions block, attempt history, and Begin button all respond to assessment settings.`,boards:[{width:1100,height:760,caption:`Launch page — default (Begin active)`,content:A(r),frame:`launch-default`,notes:`Metadata strip fields appear only when set: due date, time limit, points possible, and allowed attempts (1 / limited / Unlimited). Instructions and attempt-history blocks are absent when empty. Score format follows "Display grades as" (points, percentage, letter grade, GPA). "Score to keep" shows highest / latest / average / first.`},{width:720,caption:`Begin button — six gating states`,content:j(r),frame:`launch-begin-states`,notes:`Begin is active only when the quiz is open, attempts remain, no cooldown is active, and any required access code is entered. Each lock state has a distinct reason; the access-code state also reveals a code input field before Begin unlocks.`}]},{title:`Quiz-taking experience`,description:`During the attempt. Layout is driven by "one question at a time" and "allow backtracking". Timer, shuffle, lock-after-answering, and the two-step submit also vary by setting.`,boards:[{width:1100,height:820,caption:`All questions on one page (one-at-a-time off)`,content:M(r),frame:`taking-one-page`,notes:`When "one question at a time" is off, every question renders on one scrollable page with free navigation and a Submit always visible at the bottom. The left rail badges fill in as questions are answered.`},{width:820,height:620,caption:`One question at a time (backtracking on)`,content:N(r),frame:`taking-one-at-a-time`,notes:`With "one question at a time" on and backtracking allowed, the student sees a single question, a "Question X of Y" counter, a progress bar, and Previous + Next. With backtracking off, Previous is removed and there is no skipped-question overview. Submit appears only on the last question.`},{width:620,caption:`Two-step submit with unanswered warning`,content:P(r),frame:`taking-submit`,notes:`The Finish → Confirm Submit flow prevents accidental submissions. When questions are unanswered, the count is named before the student commits. Auto-submit on timer expiry skips the confirmation and redirects straight to results.`}]},{title:`Results page`,description:`Post-submission. The closing summary screen is instructor-configurable. Score visibility, the question list, and result-view timing are all toggle-driven. The partially graded state is the current design iteration.`,boards:[{width:1100,height:880,caption:`Results — fully graded`,content:F(r),frame:`results-graded`,notes:`Fully graded happy path: score summary plus the itemized review with ✓/✗ indicators and revealed correct answers. The question list, correct-answer reveal, and per-answer feedback are each controlled by separate instructor toggles (see the result-view board).`},{width:820,caption:`Results — partially graded (current iteration)`,content:I(r),frame:`results-partial`,notes:`Auto-graded points are final; essay and file-upload items are pending instructor review. CURRENT ITERATION: the score chart must show four states — correct, incorrect, unanswered, and ungraded — on one surface without relying on a tooltip. OPEN: should partial score visibility default to off (Annabel) or show the pending state without hover (Patrick)? Explored directions include a two-ring chart and side-by-side auto vs. pending charts.`},{width:760,caption:`Score summary — 12 variants`,content:L(r),frame:`results-score-states`,notes:`Grading state (fully graded / partially graded / fully pending) crossed with Show Points Awarded and Show Points Possible. "Display grades as" applies on top of any row with a visible number. Practice and ungraded assessment types change the framing; ungraded shows no points regardless of toggles.`},{width:760,caption:`Question list — six result-view combinations`,content:R(r),frame:`results-question-views`,notes:`Each toggle stacks on the previous: Questions → Responses → Correct/Incorrect → Correct answer → Answer feedback. Result-view timing (always, scheduled window, only once, only after last attempt) applies to each toggle independently and can hide the list even when the toggles are on.`}]}]})}export{B as default};