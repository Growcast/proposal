import ProposalHeader from '@/components/ProposalHeader'
import ExecutiveSummary from '@/components/ExecutiveSummary'
import ProblemContext from '@/components/ProblemContext'
import TechnicalProposal from '@/components/TechnicalProposal'
import Benefits from '@/components/Benefits'

import NextSteps from '@/components/NextSteps'
import ProposalFooter from '@/components/ProposalFooter'

const Index = () => {
  return (
    <div className='min-h-screen'>
      <ProposalHeader />
      <ExecutiveSummary />
      <ProblemContext />
      <TechnicalProposal />
      <Benefits />
      <NextSteps />
      <ProposalFooter />
    </div>
  )
}

export default Index
