import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Store} from "@ngrx/store";
import {closeSidePanel, openSidePanel} from "../../redux/home.actions";
import {HeroService} from "../services/hero.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  openPanel: boolean = false;
  heroes: any[] = [];

  form: FormGroup;
  subscription: Subscription = new Subscription();

  constructor(private heroService: HeroService,
              private authService: AuthService,
              private formBuilder: FormBuilder,
              private store: Store) {

    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
    })

  }

  ngOnInit() {
    this.loadData();
    this.subscription.add(
      this.store.select((s: any) => s.home).subscribe(s => this.openPanel = s.sidePanel)
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  /**
   * Logout to go to Login view
   * @public
   */
  public onLogout(): void {
    this.authService.logout();
  }

  public onOpenSidePanel() {
    this.store.dispatch(openSidePanel())
  }

  public onCloseSidePanel() {
    this.store.dispatch(closeSidePanel())
  }

  public addHero() {
    this.subscription.add(
      this.heroService.addHero(this.form.value).subscribe(() => {
        this.loadData();
        this.onCloseSidePanel();
      })
    )
  }

  private loadData(): void {
    this.subscription.add(this.heroService.getAllHeroes().subscribe(res =>
      this.heroes = res
    ))
  }

}
