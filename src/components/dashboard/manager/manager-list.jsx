import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { refreshToken, setOperation } from "../../../store/slices/misc-slice";
import { swalAlert, swalConfirm } from "../../../helpers/swal";
import { deleteManager, getManagersByPage } from "../../../api/manager-service";
import { FaTrash } from "react-icons/fa";

const ManagerList = () => {
  const [list, setList] = useState([]);
  //Backend ten gelen verileri cekmek icin

  const { listRefreshToken } = useSelector((state) => state.misc);
  //listemizde herhangi bir kaydi sildigimizde listeyi guncellememiz gerekiyordu
  //yeni bir kayit ekledik bunun alt tarafta gorunmesini istiyorduk
  //listRefreshToken olusturdun bunu guncelliyoruz
  //Eger degisiyor yeniden talep ediyor ve gidip aliyor
  const [totalRecords, setTotalRecords] = useState(0);
  //Toplam kayit sayisini saklayacagiz
  const [loading, setLoading] = useState(true);
  //Loading furumunu data.table da handle etmek icin kullanacagiz
  const [lazyState, setlazyState] = useState({
    first: 0,
    rows: 20,
    page: 0,
  });
  const dispatch = useDispatch();
  //Merkezi state i degistimek icin useDispatch var

  const loadData = async () => {
    try {
      const resp = await getManagersByPage(lazyState.page, lazyState.rows);
      setList(resp.content);
      setTotalRecords(resp.totalElements);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  //Async yapiyoruz ger ManagerByPage ile bizden hangi sayfayi gostereceini kac satir gosreceini bekliyor
  //biz bunu yukardan ayarliyoruz ve bizim listemizi set ediyoruz

  useEffect(() => {
    loadData();
  }),
    [lazyState, listRefreshToken];
  //sayfa sayisini ve satir sayisini ayarlıyoruz
  //lazystate ve listRefreshToken degistiginde calisir
  const handleNew = () => {
    dispatch(setOperation("new"));
  };

  const onPage = (event) => {
    setlazyState(event);
  };

  const handleDelete = async (id) => {
    const resp = await swalConfirm("Are you sure to delete?");
    if (!resp.isConfirmed) return;
    setLoading(true);
    try {
      await deleteManager(id);
      dispatch(refreshToken());
      swalAlert("Manager was deleted", "success");
    } catch (err) {
      const msg = err.response.data.message;
      console.log(err);
      swalAlert(msg, "error");
    } finally {
      setLoading(false);
    }
  };

  const getFullName = (row) => {
    return `${row.name} ${row.surname}`;
  };

  const getOperations = (row) => {
    return (
      <div>
        <Button
          variant="danger"
          size="sm"
          onClick={() => handleDelete(row.userId)}
        >
          <FaTrash />
        </Button>
      </div>
    );
  };

  //sayfa degisikligi yaptigim zaman degisen sayfa ile alakali bir obje veriyor bana

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            <span>List</span>
            <Button onClick={handleNew}>New</Button>
          </Card.Title>

          <DataTable
            value={list}
            //value dogrudan listemiz bizim
            //yerlesecek datayi tasiyan list

            lazy
            //Butun datayi alip bize vermesin
            //Tum data degil sayfa sayfa gelsin

            dataKey="userId"
            paginator
            first={lazyState.first}
            rows={lazyState.rows}
            totalRecords={totalRecords}
            onPage={onPage}
            loading={loading}
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column body={getFullName} header="Name" />
            <Column field="gender" header="Gender" />
            <Column field="phoneNumber" header="Phone Number" />
            <Column field="ssn" header="SSN" />
            <Column field="username" header="Username" />
            <Column body={getOperations} header="" />
          </DataTable>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ManagerList;
