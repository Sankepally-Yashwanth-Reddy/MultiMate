import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Title } from '@angular/platform-browser';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vote',
  standalone: true,
  imports: [HeaderComponent, NgFor, NgIf, CommonModule, FormsModule],
  templateUrl: './vote.component.html',
  styleUrl: './vote.component.css'
})
export class VoteComponent implements OnInit {

  parties = [
    {
      partySymbol: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/AAP_Symbol.png/50px-AAP_Symbol.png",
      partyName: "Aam Aadmi Party (AAP)"
    },
    {
      partySymbol: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Indian_Election_Symbol_Elephant.png/50px-Indian_Election_Symbol_Elephant.png",
      partyName: "Bahujan Samaj Party (BSP)"
    },
    {
      partySymbol: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Lotus_flower_symbol.svg/50px-Lotus_flower_symbol.svg.png",
      partyName: "Bharatiya Janata Party (BJP)"
    },
    {
      partySymbol: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/CPIM_election_symbol.png/50px-CPIM_election_symbol.png",
      partyName: "Communist Party of India (Marxist) (CPIM)"
    },
    {
      partySymbol: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Hand_INC.svg/50px-Hand_INC.svg.png",
      partyName: "Indian National Congress (INC)"
    },
    {
      partySymbol: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Indian_Election_Symbol_Book.svg/50px-Indian_Election_Symbol_Book.svg.png",
      partyName: "National People's Party (NPP)"
    },
  ]

  selectedParty: string | null = null;
  isVotingDisabled = false;

  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle('MultiMate | Vote');
  }

  onVote(partyName: string): void {
    this.selectedParty = partyName;
    this.isVotingDisabled = true; // Disable voting after one party is selected
  }

}
