// Angular
import {
  Component,
  OnInit,
  PipeTransform,
  Output,
  EventEmitter
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { DecimalPipe } from "@angular/common";

// Vendor
import { Observable } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { map, startWith } from "rxjs/operators";
import { ExportToCsv } from "export-to-csv";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

// Models
import { UserbaseModel, AlertModel } from "src/shared/models";

// Services
import { UserService } from "src/shared/services";

@Component({
  selector: "app-profile-list",
  templateUrl: "./profile-list.component.html",
  styleUrls: ["./profile-list.component.scss"]
})
export class ProfileListComponent implements OnInit {
  @Output() alertBack: EventEmitter<AlertModel> = new EventEmitter();
  @Output() onComponentData: EventEmitter<AlertModel> = new EventEmitter();

  alertMessage: AlertModel;

  rows;

  componentData: UserbaseModel;
  componentList: UserbaseModel[];
  componentFullList: UserbaseModel[];

  page = 1;
  pageSize = 4;
  collectionSize = 0;

  // Search
  filter = new FormControl("");
  findInList;

  // Export data
  options = {
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    showTitle: false,
    title: "Employee register",
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: false,
    headers: ["Id", "Nombre", "Código", "Movil", "Cargo"]
  };

  csvExporter = new ExportToCsv(this.options);

  // Icons
  faTimes = faTimes;

  // Modal
  public modal: NgbActiveModal;
  selectedRow;

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private modalService: NgbModal
  ) {
    this.alertMessage = new AlertModel();
  }

  ngOnInit() {
    this.onGetRecords();
  }

  onGetRecords() {
    // this.clearForm();
    this.userService.getAllUsers().subscribe(
      res => {
        this.componentList = res;
        this.componentFullList = res;
        this.collectionSize = res.length;
        this.alertMessage = new AlertModel();
      },
      error => {
        console.log("ERROR in LIST");

        this.alertMessage.alertShow = true;
        this.alertMessage.alertTitle = "Error del servidor";
        this.alertMessage.alertText = "No se puede conectar al servidor";
        this.alertMessage.alertType = "danger";
        this.alertBack.emit(this.alertMessage);
        console.log("this.alertMessage", this.alertMessage);
      }
    );
  }

  onDeleteRecord(user: UserbaseModel) {
    // console.log('user', user);

    // this.userService.deleteRecord(user).subscribe(res => {
    //   this.toastr.warning('Deleted successfully', 'Employee Register');
    //   this.onGetRecords();
    // });

    this.modal.close();
  }

  populateForm(user) {
    this.componentData = user;
    this.onComponentData.emit(user);

    // this.userService.formData = Object.assign({}, user);
    // this.selectedRow = Object.assign({}, user);
  }

  unPopulateForm() {
    // let user = new UserbaseModel()
    // this.userService.formData = Object.assign({}, user);
    // this.selectedRow = Object.assign({}, user);
  }

  /******************** */

  /// search

  onSearch(findInList) {
    // if (findInList.length > 0) {
    //   this.userService.list = this.search(findInList)
    // }
    // else {
    //   this.userService.list = this.userService.fullList
    // }
  }

  onSort(event) {
    // return event
  }

  search(text: string): UserbaseModel[] {
    // return this.userService.fullList.filter(user => {
    //   const term = text.toLowerCase();
    //   return (
    //     user.employeeFullName.toLowerCase().includes(term) ||
    //     user.employeePosition.toLowerCase().includes(term) ||
    //     user.employeeMobile.toLowerCase().includes(term)
    //   )
    // });
    return;
  }

  clearForm() {
    // this.userService.formData = new UserbaseModel();
  }

  // Export data

  onExportToCsv() {
    // this.csvExporter.generateCsv(this.userService.list);
  }

  open() {
    this.modal = this.modalService.open("deleteConfirm");
  }
}
